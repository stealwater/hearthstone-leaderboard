import { Box, Chip, Container, Grid, Typography } from '@mui/material';
import { green, red } from '@mui/material/colors';
import { Models } from 'appwrite';
import moment from 'moment';
import { useEffect } from 'react';
import useDocTitle from '../hooks/useDocTitle';
import RatingHistoryCard from './RatingHistoryCard';

function RankChangedIcon({ account }: { account: Models.Document }) {
  const rankChanged = account.rank - account.oldRank;
  const symbol = rankChanged < 0 ? '📈' : rankChanged > 0 ? '📉' : '';
  const changedValue = Math.abs(rankChanged);

  return <Typography>{symbol}</Typography>;
}

function SuperHot({ account }: { account: Models.Document }) {
  const ratingChanged = account.rating - account.oldRating;
  if (ratingChanged > 150) return <Typography>🔥</Typography>;

  return <></>;
}

function RatingChanged({ account }: { account: Models.Document }) {
  const ratingChanged = account.rating - account.oldRating;
  const color =
    ratingChanged > 0
      ? green[500]
      : ratingChanged < 0
      ? red[500]
      : 'text.primary';

  if (ratingChanged === 0) return <></>;

  return (
    <span>
      (
      <span style={{ color }}>
        {ratingChanged > 0 ? '+' : ''}
        {ratingChanged !== 0 ? ratingChanged : ''}
      </span>
      )
    </span>
  );
}

function RankChanged({ account }: { account: Models.Document }) {
  const rankChanged = account.rank - account.oldRank;
  const color =
    rankChanged < 0 ? green[500] : rankChanged > 0 ? red[500] : 'text.primary';

  return (
    <span style={{ color }}>
      {rankChanged < 0 ? '↑' : rankChanged > 0 ? '↓' : ''}
      {rankChanged !== 0 ? Math.abs(rankChanged) : ''}
    </span>
  );
}

function AccountCard({ account }: { account: Models.Document }) {
  const [, setTitle] = useDocTitle(`${account.accountName}`);

  useEffect(() => {
    setTitle(account.accountName);
  }, [account]);

  return (
    <Container sx={{ marginTop: 1 }}>
      <Grid container alignItems="center" mb={2}>
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
          <Box mr={1} display="inline-block">
            <RankChangedIcon account={account} />
          </Box>
          <Box mr={1} display="inline-block">
            <SuperHot account={account} />
          </Box>
          <Typography mt={1} variant="body2">
            Last played: {moment(account.lastPlayed).fromNow()}
          </Typography>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h5" component="span">
          Rank: {account.rank} <RankChanged account={account} /> , Rating:{' '}
          {account.rating} <RatingChanged account={account} />
        </Typography>
      </Box>
      <Box>
        <RatingHistoryCard account={account} />
      </Box>
    </Container>
  );
}

export default AccountCard;
