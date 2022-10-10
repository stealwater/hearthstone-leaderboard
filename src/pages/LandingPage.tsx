import { Box, Container, Grid } from '@mui/material';
import HeroSection from '../components/HeroSection';
import Leaderboard from '../components/Leaderboard';
import SearchBox from '../components/SearchBox';
import useDocTitle from '../hooks/useDocTitle';

function LandingPage() {
  useDocTitle('Hearthstone Battlegrounds Leaderboard');

  return (
    <>
      <HeroSection />
      <Container>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} md={4}>
            <Leaderboard region="AP" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Leaderboard region="US" />
          </Grid>
          <Grid item xs={12} md={4}>
            <Leaderboard region="EU" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default LandingPage;
