import { Box, Chip, Grid, Typography } from '@mui/material';
import { Models } from 'appwrite';
import moment from 'moment';
import useDocTitle from '../hooks/useDocTitle';
import RatingHistoryCard from './RatingHistoryCard';
import RatingHistoryChart from './RatingHistoryChart';

function AccountCard({ account }: { account: Models.Document }) {
  useDocTitle(`${account.accountName}`);

  return (
    <Box
      mx="auto"
      my={2}
      px={2}
      sx={{
        maxWidth: 1200,
      }}
    >
      <Grid container alignItems="center">
        <Grid item mr={2}>
          <Typography variant="h2">{account.accountName}</Typography>
        </Grid>
        <Grid item>
          <Box mr={1} display="inline-block">
            <Chip
              label={`Region: ${account.region}`}
              color="primary"
              size="small"
            />
          </Box>
          <Box mr={1} display="inline-block">
            <Chip
              label={`Season: ${account.seasonId + 1}`}
              color="default"
              size="small"
              variant="outlined"
            />
          </Box>
          <Typography mt={1} variant="body2">
            Last played: {moment(account.$updatedAt).fromNow()}
          </Typography>
        </Grid>
      </Grid>
      <Grid container alignItems="center">
        <Grid item mx={1}>
          <Typography variant="h5" component="span">
            Rank: {account.rank}, Rating: {account.rating}
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item mx={1} mt={4} sm={12}>
          <RatingHistoryCard account={account} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default AccountCard;
