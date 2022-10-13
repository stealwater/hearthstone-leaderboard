import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import FooterSection from './components/FooterSection';
import TopBar from './components/TopBar';
import AccountPage from './pages/AccountPage';
import LandingPage from './pages/LandingPage';
import { account } from './utils/appwriteSDK';
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import LeaderboardPage from './pages/LeaderboardPage';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  useEffect(() => {
    // handle session init
    account.get().catch(() => {
      account.createAnonymousSession().catch(console.error);
    });
  }, []);

  const queryClient = new QueryClient();

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <LandingPage />,
    },
    {
      path: '/player/:accountName',
      element: <AccountPage />,
    },
    {
      path: '/leaderboard/:region',
      element: <LeaderboardPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ];

  const element = useRoutes(routes);

  const themeLight = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: grey[50],
      },
    },
  });

  const themeDark = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  const [light, setLight] = useLocalStorage('HSBG_THEME', true);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        <CssBaseline />
        <TopBar setLight={setLight} light={light} />
        <Box sx={{ minHeight: 'calc(100vh - 164px)' }}>{element}</Box>
        <FooterSection />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
