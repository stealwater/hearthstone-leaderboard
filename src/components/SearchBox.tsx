import { Search } from '@mui/icons-material';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchAccount from '../hooks/useSearchAccount';

function SearchBox() {
  const [inputValue, setInputValue] = useState('');
  const { accounts } = useSearchAccount(inputValue);
  const navigate = useNavigate();

  return (
    <Autocomplete
      sx={{ color: '#FFFFFF' }}
      disablePortal
      id="combo-box-demo"
      options={accounts || []}
      noOptionsText={'Enter the BattleTag to search'}
      autoComplete
      renderInput={(params) => (
        <TextField
          {...params}
          label="#Enter the BattleTag"
          size="small"
          sx={{ input: { color: '#FFFFFF' } }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
          variant="standard"
        />
      )}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      getOptionLabel={(option) => `${option.accountName} , ${option.region}`}
      isOptionEqualToValue={(option, value) => option.$id === value.$id}
      onChange={(event: any, account) => {
        if (account)
          navigate(`/player/${account.accountName}?region=${account.region}`);
      }}
    />
  );
}

export default SearchBox;
