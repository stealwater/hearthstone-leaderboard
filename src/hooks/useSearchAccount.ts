import { database } from './../utils/appwriteSDK';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';

const useSearchAccount = (query: string) => {
  const [accounts, setAccounts] = useState<Models.Document[]>();

  useEffect(() => {
    const fetchAccount = async () => {
      const response = await database.listDocuments('Leaderboard', 'account', [
        Query.search('accountName', query),
      ]);
      setAccounts(response.documents);
    };

    fetchAccount();
  }, [query]);

  return { accounts };
};

export default useSearchAccount;
