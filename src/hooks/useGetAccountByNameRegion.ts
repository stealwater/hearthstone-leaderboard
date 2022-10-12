import { Query } from 'appwrite';
import { useQuery } from '@tanstack/react-query';
import AppwriteConfig from '../configs/appwriteConfig';
import { database } from '../utils/appwriteSDK';

const useGetAccountByNameRegion = (accountName: string, region: string) => {
  const HOOK_ID = 'USE_GET_ACCOUNT_BY_NAME_REGION';
  return useQuery(
    [HOOK_ID, accountName, region],
    () =>
      database.listDocuments(AppwriteConfig.databaseId, 'account', [
        Query.equal('accountName', accountName),
        Query.equal('region', region),
      ]),
    {
      staleTime: 120000,
    }
  );
};

export default useGetAccountByNameRegion;
