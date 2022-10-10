import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material';
import { green, red } from '@mui/material/colors';
import { Models } from 'appwrite';
import moment from 'moment';
import useListRecords from '../hooks/useListRecords';

function RatingHistoryCard({ account }: { account: Models.Document }) {
  const { records } = useListRecords(account.$id);

  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" component="div" m={2}>
        Rating History
      </Typography>

      <Table size="small" aria-label="rating history table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Rank</TableCell>
            <TableCell align="center">Rating</TableCell>
            <TableCell align="center">(+/-)</TableCell>
            <TableCell align="center">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records?.map((row) => (
            <TableRow
              key={row.$id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">
                <Typography>{row.rank}</Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>{row.rating}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color:
                    row.changed < 0
                      ? red[500]
                      : row.changed > 0
                      ? green[500]
                      : '',
                }}
              >
                <Typography>
                  {row.changed > 0 ? '+' : ''}
                  {row.changed}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Tooltip title={moment(row.$createdAt).format('LLL')}>
                  <Typography>{moment(row.$createdAt).fromNow()}</Typography>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RatingHistoryCard;
