import React from 'react'

import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import useLocalizationContext from '@/hooks/useLocalizationContext'

const FormSelect = () => {
  const {
    states, cities,
    selectedState, selectedCity,
    handleSelectState, handleSelectCity, isFetching
  } = useLocalizationContext()

  return (
    <Box>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="state-select-helper-label">Estado</InputLabel>
        <Select
          labelId="state-select-helper-label"
          id="state-select-helper-label"
          value={selectedState}
          label="Estado"
          disabled={isFetching}
          sx={{ minWidth: 120 }}
          onChange={(e) => { handleSelectState(e.target.value) }}
        >
          {states.map((state, index) => (
            <MenuItem key={`${index}-${state}`} value={state}>{state}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="cities-select-helper-label">Cidade</InputLabel>
        <Select
          labelId="cities-select-helper-label"
          id="cities-select-helper-label"
          value={selectedCity}
          label="Estado"
          disabled={isFetching}
          sx={{ minWidth: 250 }}
          onChange={(e) => { handleSelectCity(e.target.value) }}
        >
          {cities.map((city, index) => (
            <MenuItem key={`${index}-${city}`} value={city}>{city}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default FormSelect
