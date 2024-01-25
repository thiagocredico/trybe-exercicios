import React, { type FC } from 'react'

import { Typography } from '@mui/material'

import useLocalizationContext from '@/hooks/useLocalizationContext'

const ShowInfo: FC = () => {
  const { selectedCity, selectedState } = useLocalizationContext()

  return (
    <Typography variant="body1" gutterBottom textAlign="center">
      {`Estado: ${selectedState}`}
      <br />
      {`Cidade: ${selectedCity}`}
    </Typography>
  )
}

export default ShowInfo
