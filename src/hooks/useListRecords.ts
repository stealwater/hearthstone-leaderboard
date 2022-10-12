import { useQuery } from 'react-query';
import { Models, Query } from 'appwrite';
import { useEffect, useState } from 'react';
import AppwriteConfig from '../configs/appwriteConfig';
import { database } from '../utils/appwriteSDK';

const useListRecords = (accountId: string) => {
  const HOOK_ID = 'USE_LIST_RECORDS';

  return useQuery(
    [HOOK_ID, accountId],
    () =>
      database.listDocuments(AppwriteConfig.databaseId, 'record', [
        Query.equal('accountId', accountId),
        Query.orderDesc('$createdAt'),
      ]),
    {
      staleTime: 120000,
    }
  );
};

export default useListRecords;
