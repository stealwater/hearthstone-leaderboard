import { Box, Container, Typography } from '@mui/material';

function FooterSection() {
  return (
    <Container maxWidth="lg" component="footer">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          height: 100,
        }}
      >
        <Typography variant="caption" color="initial">
          HSBG © 2022
        </Typography>
      </Box>
    </Container>
  );
}

export default FooterSection;
