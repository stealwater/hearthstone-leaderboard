import { useParams, useSearchParams } from 'react-router-dom';
import AccountCard from '../components/AccountCard';
import NotFoundPlayerCard from '../components/NotFoundPlayerCard';
import useSearchAccount from '../hooks/useSearchAccount';

function AccountPage() {
  const { accountName } = useParams();
  const [searchParams] = useSearchParams();

  const { accounts } = useSearchAccount(
    accountName || '',
    searchParams.get('region') || 'AP'
  );

  if (!accounts) return <></>;
  if (accounts.length === 0) return <NotFoundPlayerCard />;

  return <AccountCard account={accounts[0]} />;
}

export default AccountPage;
