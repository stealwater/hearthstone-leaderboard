import { Autocomplete, Box, TextField } from '@mui/material';

function SearchBox() {
  return (
    <Box my={2} mx="auto" px={2} sx={{ maxWidth: 600 }}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={[]}
        renderInput={(params) => (
          <TextField {...params} label="Enter the BattleTag" />
        )}
      />
    </Box>
  );
}

export default SearchBox;
