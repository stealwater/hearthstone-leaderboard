import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none', flexGrow: 1 }}
          >
            HSBG
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
