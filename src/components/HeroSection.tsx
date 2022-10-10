import { Box, Typography } from '@mui/material';
import React from 'react';

function HeroSection() {
  return (
    <Box
      sx={{ height: 200 }}
      display="flex"
      justifyContent="center"
      alignItems="end"
      flexDirection="row"
      flexWrap="wrap"
    >
      <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
        Hearthstone Battlegrounds Leaderboard
      </Typography>
    </Box>
  );
}

export default HeroSection;
