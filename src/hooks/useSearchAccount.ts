import { database } from './../utils/appwriteSDK';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';

const useSearchAccount = (query: string, region: string) => {
  const [accounts, setAccounts] = useState<Models.Document[]>();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await database.listDocuments(
        AppwriteConfig.databaseId,
        'account',
        [Query.search('accountName', query), Query.equal('region', region)]
      );
      setAccounts(response.documents);
    };

    fetchAccount();
  }, [query]);

  return { accounts };
};

export default useSearchAccount;
