import { Box, styled } from '@mui/material'

export const StyledApp = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: auto;

  .content-app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 100%;
    max-width: 500px;
    min-height: 300px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  }
`
