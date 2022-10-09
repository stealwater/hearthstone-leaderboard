import { useEffect } from 'react';
import LeaderBoard from './pages/LeaderBoard';
import { account, appwrite } from './utils/appwriteSDK';

function App() {
  useEffect(() => {
    // handle session init
    account.get().catch(() => {
      account.createAnonymousSession().catch(console.error);
    });
  }, []);

  return <LeaderBoard />;
}

export default App;
