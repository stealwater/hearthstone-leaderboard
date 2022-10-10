import { DarkMode, LightMode } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

function TopBar({
  light,
  setLight,
}: {
  light: boolean;
  setLight: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useTheme();
  const match = useMediaQuery(theme.breakpoints.up('md'));

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
          <Box
            ml="auto"
            mr={2}
            sx={{ maxWidth: 600, minWidth: match ? 400 : 200 }}
          >
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
