import { useParams } from 'react-router-dom';
import AccountCard from '../components/AccountCard';
import FooterSection from '../components/FooterSection';
import useSearchAccount from '../hooks/useSearchAccount';

function AccountPage() {
  const { accountName } = useParams();
  const { accounts } = useSearchAccount(accountName || '');

  if (!accounts) return <div>Loading...</div>;
  if (accounts.length === 0) return <div>Not Found player: {accountName}</div>;

  return (
    <>
      <AccountCard account={accounts[0]} />
      <FooterSection />
    </>
  );
}

export default AccountPage;
