import { Box, Typography } from '@mui/material';

function NotFoundPlayerCard({ accountName }: { accountName?: string }) {
  return (
    <Box
      mx="auto"
      my={2}
      px={2}
      sx={{
        maxWidth: 1200,
      }}
    >
      <Typography variant="h4">Player: {accountName} Not Found.</Typography>
    </Box>
  );
}

export default NotFoundPlayerCard;
