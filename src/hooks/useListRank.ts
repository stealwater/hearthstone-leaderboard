import { database } from './../utils/appwriteSDK';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';
import { useQuery } from 'react-query';

const useListRank = (region: string, pageSize = 25, seasonId = 7) => {
  const HOOK_ID = 'USE_LIST_RANK';
  const [page, setPage] = useState(0);

  const fetchRank = async (
    region: string,
    page: number,
    pageSize: number,
    seasonId: number
  ) => {
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

    return response;
  };

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      [HOOK_ID, region, page, pageSize, seasonId],
      () => fetchRank(region, page, pageSize, seasonId),
      {
        keepPreviousData: true,
      }
    );

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    page,
    setPage,
  };
};

export default useListRank;
