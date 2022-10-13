import { Box, Container, Link, Tooltip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Box mr={4}>
          <Typography variant="body1">HSBG © 2022</Typography>
        </Box>
        <Box>
          <Tooltip title="Source Code">
            <Link
              href="https://github.com/stealwater/hearthstone-leaderboard"
              sx={{ color: 'text.primary' }}
              target="_blank"
            >
              <GitHubIcon />
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Container>
  );
}

export default FooterSection;
