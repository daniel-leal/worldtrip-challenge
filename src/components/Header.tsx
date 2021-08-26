import React from 'react'
import Image from 'next/image'

import logoImg from '../assets/images/Logo.svg'
import { Box } from '@chakra-ui/react'

export function Header(): JSX.Element {
  return (
    <Box
      display="flex"
      w="100%"
      h="100px"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={logoImg} alt="WorldTrip" />
    </Box>
  )
}
