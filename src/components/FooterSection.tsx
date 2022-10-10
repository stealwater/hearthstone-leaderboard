import { Box, Container, Typography } from '@mui/material';

function FooterSection() {
  return (
    <Container maxWidth="lg" component="footer">
      <Box
        sx={{
          flexGrow: 1,
          justifyContent: 'center',
          display: 'flex',
          mt: 4,
          height: 20,
        }}
      >
        <Typography variant="caption" color="initial">
          Copyright © 2022
        </Typography>
      </Box>
    </Container>
  );
}

export default FooterSection;
