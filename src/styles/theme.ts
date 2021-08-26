import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#333333',
      '800': '#4F4F4F',
      '700': '#47585B',
      '600': '#828282',
      '400': '#BDBDBD',
      '300': '#E0E0E0',
      '200': '#DADADA',
      '150': '#F2F2F2',
      '100': '#F5F8FA'
    },
    red: '#EB5757',
    orange: '#F2994A',
    yellow: '#F2C94C',
    green: {
      '300': '#219653',
      '100': '#27AE60',
      '50': '#6FCF97'
    },
    blue: {
      '200': '#2F80ED',
      '100': '#2D9CDB',
      '50': '#56CCF2'
    },
    purple: {
      '200': '#9B51E0',
      '100': '#BB6BD9'
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700'
      }
    }
  }
})

// fonts Poppins 400 500 600 and Barlow 500
