import {
  Box,
  Container,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import FullLeaderboard from '../components/FullLeaderboard';

function LeaderboardPage() {
  const { region } = useParams();
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up('sm'));

  if (region !== 'AP' && region !== 'US' && region !== 'EU')
    return <Navigate to="/" />;

  return (
    <>
      <Box
        sx={{ height: 100 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="row"
        flexWrap="wrap"
      >
        <Typography
          variant={upSM ? 'h4' : 'h6'}
          component="div"
          sx={{ textAlign: 'center' }}
        >
          {region} Leaderboard
        </Typography>
      </Box>
      <Container>
        <FullLeaderboard region={region} />
      </Container>
    </>
  );
}

export default LeaderboardPage;
