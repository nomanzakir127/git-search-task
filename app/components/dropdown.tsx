"use client";
import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { InputProps } from '../types/types';

const DropDown:  React.FC<InputProps> = ({queryType, handleQueryType}) =>{

  const handleChange = (event: SelectChangeEvent) => {
    handleQueryType && handleQueryType(event.target.value);
  };

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, width: '100%' }}>
        <InputLabel id="demo-simple-select-standard-label">Search Type</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={queryType ? queryType : ''}
          onChange={handleChange}
          label="Search Type"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'users'}>Users</MenuItem>
          <MenuItem value={'repositories'}>Repositories</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DropDown;