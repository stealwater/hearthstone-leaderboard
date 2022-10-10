import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';
import { database } from '../utils/appwriteSDK';

const useListRecords = (accountId: string) => {
  const [records, setRecords] = useState<Models.Document[]>();

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await database.listDocuments(
        AppwriteConfig.databaseId,
        'record',
        [Query.equal('accountId', accountId), Query.orderDesc('$createdAt')]
      );
      const records = response.documents;
      setRecords(records);
    };

    fetchRecords();
  }, [accountId]);

  return { records };
};

export default useListRecords;
