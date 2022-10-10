import useListRank from '../hooks/useListRank';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function Leaderboard({ region }: { region: string }) {
  const { ranks } = useListRank(region);

  return (
    <TableContainer component={Paper}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {region}
        </Typography>
      </Toolbar>
      <Table size="small" aria-label="ranking table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">BattleTag</TableCell>
            <TableCell align="center">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ranks?.map((row) => (
            <TableRow
              key={row.$id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.rank}</TableCell>
              <TableCell align="center">
                <Link to={`/player/${row.accountName}`}>{row.accountName}</Link>
              </TableCell>
              <TableCell align="center">{row.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Leaderboard;
