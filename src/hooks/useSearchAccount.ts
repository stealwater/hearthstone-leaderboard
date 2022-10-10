import { database } from './../utils/appwriteSDK';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';

const useSearchAccount = (query: string, region?: string) => {
  const [accounts, setAccounts] = useState<Models.Document[]>();

  useEffect(() => {
    const fetchAccount = async () => {
      const queries = [Query.search('accountName', query)];
      if (region) queries.push(Query.equal('region', region));

      const response = await database.listDocuments(
        AppwriteConfig.databaseId,
        'account',
        queries
      );
      setAccounts(response.documents);
    };

    fetchAccount();
  }, [query, region]);

  return { accounts };
};

export default useSearchAccount;
