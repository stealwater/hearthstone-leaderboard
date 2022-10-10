import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import AccountPage from './pages/AccountPage';
import LandingPage from './pages/LandingPage';
import { account } from './utils/appwriteSDK';

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
      path: '*',
      element: <Navigate to="/" />,
    },
  ];

  const element = useRoutes(routes);

  return (
    <QueryClientProvider client={queryClient}>{element}</QueryClientProvider>
  );
}

export default App;
