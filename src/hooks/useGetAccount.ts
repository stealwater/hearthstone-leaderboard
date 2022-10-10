import { Models } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';
import { database } from '../utils/appwriteSDK';

const useGetAccount = (accountId: string) => {
  const [account, setAccount] = useState<Models.Document>();

  useEffect(() => {
    const getAccount = async () => {
      const document = await database.getDocument(
        AppwriteConfig.databaseId,
        'account',
        accountId
      );

      setAccount(document);
    };
    getAccount();
  }, [accountId]);

  return { account };
};

export default useGetAccount;
