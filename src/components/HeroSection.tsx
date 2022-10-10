import { Box, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

function HeroSection() {
  const theme = useTheme();
  const upSM = useMediaQuery(theme.breakpoints.up('sm'));

  return (
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
        Hearthstone Battlegrounds Leaderboard
      </Typography>
    </Box>
  );
}

export default HeroSection;
