import { useState } from 'react';
import { useQuery } from 'react-query';

const useFetchHSLeaderboard = (defaultRegion = 'AP') => {
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState(defaultRegion);
  const [season, setSeason] = useState(7);
  const API_URL = import.meta.env.VITE_HS_LEADERBOARD_API;

  const fetchLeaderboardData = (region = 'AP', page = 1, season = 7) =>
    fetch(
      `${API_URL}?region=${region}&leaderboardId=battlegrounds&page=${page}&seasonId=${season}`
    )
      .then((res) => res.json())
      .then((res) => res.leaderboard.rows);

  const { isLoading, isError, error, data, isFetching, isPreviousData } =
    useQuery(
      ['leaderboardsData', region, page, season],
      () => fetchLeaderboardData(region, page, season),
      { keepPreviousData: true }
    );

  return { data, setRegion, setPage, setSeason };
};

export default useFetchHSLeaderboard;
