import React from 'react'

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

export function Banner(): JSX.Element {
  return (
    <Flex
      w="100%"
      h={['163px', '250px', '250px', '335px']}
      bgImage="url('/Background.svg')"
      bgPosition={['100% 20%', '100% 20%', '100% 30%']}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        justify={['center', 'space-between']}
        align="center"
        w="100%"
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
        <Box>
          <Heading
            color="gray.100"
            fontFamily="Poppins"
            fontWeight="500"
            fontSize={['xl', '2xl', '2xl', '2xl', '4xl']}
          >
            5 continentes,
            <br />
            infinitas possibilidades.
          </Heading>
          <Text
            fontFamily="Poppins"
            color="gray.200"
            mt="5"
            fontSize={['0.8rem', 'xl']}
            lineHeight="20px"
            maxW={['100%', '100%', '100%', '550px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Image
          w={['300px', '300px', '300px', '430px']}
          display={['none', 'none', 'block']}
          src="/Airplane.svg"
          alt="Avião amarelo voando com algumas nuvens ao redor."
          transform="translateY(48px)"
          ml="8"
        />
      </Flex>
    </Flex>
  )
}