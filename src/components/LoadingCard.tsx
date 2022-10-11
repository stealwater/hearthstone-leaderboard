import { Box, CircularProgress } from '@mui/material';
import React from 'react';

function LoadingCard() {
  return (
    <Box
      height="50vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      flexWrap="wrap"
    >
      <CircularProgress />
    </Box>
  );
}

export default LoadingCard;
