import {
  Box,
  CircularProgress,
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
import RatingHistoryChart from './RatingHistoryChart';

function RatingHistoryCard({ account }: { account: Models.Document }) {
  const { data, isLoading } = useListRecords(account.$id);
  const records = data?.documents;

  return (
    <>
      <Box my={2}>
        <RatingHistoryChart account={account} records={records} />
      </Box>
      <TableContainer component={Paper}>
        <Typography variant="h5" component="div" m={2}>
          Rating History
        </Typography>

        <Table size="small" aria-label="rating history table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Rank</TableCell>
              <TableCell align="center">Rating</TableCell>
              <TableCell align="center">+ / -</TableCell>
              <TableCell align="center">Time</TableCell>
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
    </>
  );
}

export default RatingHistoryCard;
