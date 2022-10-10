import { database } from './../utils/appwriteSDK';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';

const useListRank = (region: string, pageSize = 25, seasonId = 7) => {
  const [ranks, setRanks] = useState<Models.Document[]>();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchRank = async () => {
      const response = await database.listDocuments(
        AppwriteConfig.databaseId,
        'rank',
        [
          Query.equal('region', region),
          Query.equal('seasonId', seasonId),
          Query.orderAsc('rank'),
          Query.limit(pageSize),
          Query.offset(page * pageSize),
        ]
      );

      setTotal(response.total);
      setRanks(response.documents);
    };

    fetchRank();
  }, [region]);

  return { ranks, total, page, setPage };
};

export default useListRank;
