import { Box, styled } from '@mui/material'
import React from 'react'

type Props = {}

const Root = styled(Box)(({theme}) => ({
    background:'url(assets/website/website.png)',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width:'100vw'
}))

const MainSection = (props: Props) => {
  return (
    <Root>hello</Root>
  )
}

export default MainSection