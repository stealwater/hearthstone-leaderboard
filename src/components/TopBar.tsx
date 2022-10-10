import { DarkMode, LightMode } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

function TopBar({
  light,
  setLight,
}: {
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ color: 'inherit', textDecoration: 'none' }}
          >
            HSBG
          </Typography>
          <Box ml="auto" mr={10} sx={{ maxWidth: 600, minWidth: 400 }}>
            <SearchBox />
          </Box>
          <IconButton size="small" color="inherit" sx={{ mr: 2 }}>
            {light ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default TopBar;
