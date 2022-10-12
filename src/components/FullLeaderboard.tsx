import {
  Box,
  CircularProgress,
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { Rank, Rating } from './Leaderboard';
import { Link as RouterLink } from 'react-router-dom';
import { Waypoint } from 'react-waypoint';
import useInfiniteListRank from '../hooks/useInfiniteListRank';
import React from 'react';

function FullLeaderboard({ region }: { region: string }) {
  const { data, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteListRank(region);

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="ranking table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">BattleTag</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">+/-</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.pages?.map((page, i) => (
            <React.Fragment key={i}>
              {page.documents.map((row, rowIndex) => (
                <TableRow
                  key={row.$id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center">
                    <Rank account={row} />
                  </TableCell>
                  <TableCell align="center">
                    <Link
                      to={`/player/${row.accountName}?region=${row.region}`}
                      component={RouterLink}
                    >
                      {row.accountName}
                    </Link>
                  </TableCell>
                  <TableCell align="center">{row.rating}</TableCell>
                  <TableCell align="center">
                    <Rating account={row} />
                    {rowIndex === page.documents.length - 10 &&
                      i === data.pages.length - 1 && (
                        <Waypoint
                          scrollableAncestor={window}
                          onEnter={() => {
                            fetchNextPage();
                          }}
                        />
                      )}
                  </TableCell>
                </TableRow>
              ))}
            </React.Fragment>
          ))}
          {isLoading && (
            <tr>
              <td colSpan={4}>
                <Box
                  height={100}
                  mx="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="row"
                  flexWrap="wrap"
                >
                  <CircularProgress />
                </Box>
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FullLeaderboard;
