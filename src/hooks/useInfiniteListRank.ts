import { useInfiniteQuery } from '@tanstack/react-query';
import { Query } from 'appwrite';
import AppwriteConfig from '../configs/appwriteConfig';
import { database } from '../utils/appwriteSDK';

const useInfiniteListRank = (region: string, pageSize = 25, seasonId = 7) => {
  const HOOK_ID = 'USE_INFINITE_LIST_RANK';
  const MAX_RECORD = 500;

  const fetchRank = async (
    region: string,
    pageSize: number,
    seasonId: number,
    page: number
  ) => {
    const response = await database.listDocuments(
      AppwriteConfig.databaseId,
      'account',
      [
        Query.equal('region', region),
        Query.equal('seasonId', seasonId),
        Query.lessThanEqual('rank', MAX_RECORD),
        Query.orderAsc('rank'),
        Query.limit(pageSize),
        Query.offset(page * pageSize),
      ]
    );

    return { ...response, lastIndex: (page + 1) * pageSize, page };
  };

  return useInfiniteQuery(
    [HOOK_ID, region, seasonId],
    ({ pageParam = 0 }) => fetchRank(region, pageSize, seasonId, pageParam),
    {
      cacheTime: 120000,
      staleTime: 120000,
      getNextPageParam: (lastPage, pages) =>
        lastPage.lastIndex < lastPage.total ? lastPage.page + 1 : undefined,
    }
  );
};

export default useInfiniteListRank;
