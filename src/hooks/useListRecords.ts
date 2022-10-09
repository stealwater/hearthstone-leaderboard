import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import { database } from '../utils/appwriteSDK';

const useListRecords = (accountId: string) => {
  const [records, setRecords] = useState<Models.Document[]>();

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await database.listDocuments('Leaderboard', 'record', [
        Query.equal('accountId', accountId),
      ]);
      const records = response.documents;
      records.map((record, index) => {
        record.diff = 0;
        if (index > 0) record.diff = record.rating - records[index - 1].rating;
        return record;
      });

      setRecords(records);
    };

    fetchRecords();
  }, [accountId]);

  return { records };
};

export default useListRecords;
