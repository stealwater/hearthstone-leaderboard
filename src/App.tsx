import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import LandingPage from './pages/LandingPage';
import QueryPage from './pages/QueryPage';
import { account } from './utils/appwriteSDK';

function App() {
  useEffect(() => {
    // handle session init
    account.get().catch(() => {
      account.createAnonymousSession().catch(console.error);
    });
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  );
}

export default App;
