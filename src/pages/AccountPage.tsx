import { useParams, useSearchParams } from 'react-router-dom';
import AccountCard from '../components/AccountCard';
import LoadingCard from '../components/LoadingCard';
import NotFoundPlayerCard from '../components/NotFoundPlayerCard';
import useGetAccountByNameRegion from '../hooks/useGetAccountByNameRegion';

function AccountPage() {
  const { accountName } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetAccountByNameRegion(
    accountName || '',
    searchParams.get('region') || 'AP'
  );
  const accounts = data?.documents;

  if (isLoading) return <LoadingCard />;
  if (!accounts || accounts.length === 0)
    return <NotFoundPlayerCard accountName={accountName} />;

  return <AccountCard account={accounts[0]} />;
}

export default AccountPage;
