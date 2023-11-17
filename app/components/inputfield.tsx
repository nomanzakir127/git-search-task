import React, { ChangeEvent }  from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from '../types/types';
import { useDebounce } from '@/services/useDebounce';

const InputField:  React.FC<InputProps> = ({searchString, handleSearchString}) =>{

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>{

    handleSearchString && handleSearchString(event.target.value ? event.target.value : 'Q')

  }

  const debouncedFunction = useDebounce(handleChange, 1000);

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Search" variant="standard" onChange={debouncedFunction}/>
    </Box>
  );
}


export default InputField;