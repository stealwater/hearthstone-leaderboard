import React, { useEffect, useState } from 'react';
import AccountCard from '../components/AccountCard';
import useSearchAccount from '../hooks/useSearchAccount';

function QueryPage() {
  const [query, setQuery] = useState('');
  const { accounts } = useSearchAccount(query);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInput} value={query} />
      {accounts?.map((account) => (
        <AccountCard key={account.$id} account={account} />
      ))}
    </div>
  );
}

export default QueryPage;
