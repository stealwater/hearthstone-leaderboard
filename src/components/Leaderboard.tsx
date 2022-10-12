import useListRank from '../hooks/useListRank';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Models } from 'appwrite';
import { green, red } from '@mui/material/colors';
import { KeyboardDoubleArrowRight } from '@mui/icons-material';

export function Rank({ account }: { account: Models.Document }) {
  const rankChanged = account.rank - account.oldRank;
  const symbol = rankChanged < 0 ? '↑' : rankChanged > 0 ? '↓' : '=';
  const color = rankChanged < 0 ? green[500] : rankChanged > 0 ? red[500] : '';
  const changedValue = Math.abs(rankChanged);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
      gap={1}
      sx={{ color: color }}
    >
      <Typography>{account.rank}</Typography>
      <Typography>{symbol}</Typography>
    </Box>
  );
}

export function Rating({ account }: { account: Models.Document }) {
  const ratingChanged = account.rating - account.oldRating;
  const color =
    ratingChanged > 0 ? green[500] : ratingChanged < 0 ? red[500] : '';

  return (
    <Typography>
      <span style={{ color: color }}>
        {ratingChanged > 0 ? '+' : ''}
        {ratingChanged !== 0 ? ratingChanged : ''}
      </span>
    </Typography>
  );
}

function Leaderboard({ region }: { region: string }) {
  const { data, isLoading } = useListRank(region);

  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {region}
        </Typography>
        <Typography>
          <Button
            to={`/leaderboard/${region}`}
            component={RouterLink}
            endIcon={<KeyboardDoubleArrowRight />}
          >
            More
          </Button>
        </Typography>
      </Toolbar>
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
          {data?.documents?.map((row) => (
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
