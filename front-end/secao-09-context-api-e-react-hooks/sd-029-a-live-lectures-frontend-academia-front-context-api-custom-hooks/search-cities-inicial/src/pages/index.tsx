
import { type NextPage } from 'next'

import { Paper, Stack } from '@mui/material'

import FormSelect from '@/components/FormSelect'
import ShowInfo from '@/components/ShowInfo'
import { StyledApp } from '@/components/styles'

const IndexPage: NextPage = () => {
  return (
    <StyledApp >
      <Paper elevation={3} className='content-app'>
        <Stack spacing={2} alignItems="center">
          <FormSelect />
          <ShowInfo />
        </Stack>
      </Paper>
    </StyledApp>
  )
}

export default IndexPage
