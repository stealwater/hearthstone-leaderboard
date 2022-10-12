import {
  Box,
  Button,
  Container,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import FullLeaderboard from '../components/FullLeaderboard';
import { Link as RouterLink } from 'react-router-dom';
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from '@mui/icons-material';

function LeaderboardPage() {
  const { region } = useParams();
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up('sm'));

  if (region !== 'AP' && region !== 'US' && region !== 'EU')
    return <Navigate to="/" />;

  const regions = ['AP', 'US', 'EU'];
  const regionIndex = regions.findIndex((reg) => reg === region);
  const prevRegionIndex = (regionIndex - 1 + 3) % 3;
  const nextRegionIndex = (regionIndex + 1 + 3) % 3;

  return (
    <>
      <Container>
        <Box
          sx={{ height: 100 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="wrap"
        >
          <Typography>
            <Button
              size="large"
              to={`/leaderboard/${regions[prevRegionIndex]}`}
              component={RouterLink}
              startIcon={<KeyboardDoubleArrowLeft />}
            >
              {regions[prevRegionIndex]}
            </Button>
          </Typography>
          <Typography
            variant={upSM ? 'h4' : 'h6'}
            component="div"
            sx={{ textAlign: 'center' }}
            mx="auto"
          >
            {region} Leaderboard
          </Typography>
          <Typography>
            <Button
              size="large"
              to={`/leaderboard/${regions[nextRegionIndex]}`}
              component={RouterLink}
              endIcon={<KeyboardDoubleArrowRight />}
            >
              {regions[nextRegionIndex]}
            </Button>
          </Typography>
        </Box>
        <FullLeaderboard region={region} />
      </Container>
    </>
  );
}

export default LeaderboardPage;
