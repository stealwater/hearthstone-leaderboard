import { Autocomplete, Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSearchAccount from '../hooks/useSearchAccount';

function SearchBox() {
  const [inputValue, setInputValue] = useState('');
  const { accounts } = useSearchAccount(inputValue);
  const navigate = useNavigate();

  return (
    <Box mb={4} mx="auto" px={2} sx={{ maxWidth: 600 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={accounts || []}
        noOptionsText={'Enter the BattleTag to search'}
        autoComplete
        renderInput={(params) => (
          <TextField {...params} label="Enter the BattleTag" />
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
    </Box>
  );
}

export default SearchBox;
