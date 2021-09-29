const colors = {
  white: '#fff',
  black: '#000',
  yellow: '#8b743d',
  yellow1: '#887f6b',
  yellow2: '#b19044',
  yellow3: '#fbf8f1',
  blue: '#12172d',
  gray: '#f4f4f4',
  gray1: '#696969',
  gray2: '#00000005',
  gray3: '#00000012',
  gray4: '#d4d4d4',
  red: '#ef233c',
} as const;

const fontSizes = {
  xs: '1rem',
  sm: '1.2rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2rem',
} as const;

const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
} as const;

const fontFamilies = {
  en: 'Fira Sans, Open Sans, sans-serif',
} as const;

const transitions = {
  duration: {
    shortest: 150,
    short: 200,
    standard: 300,
  },
} as const;

const zIndexes = {} as const;

export default {
  colors,
  fontSizes,
  fontWeights,
  fontFamilies,
  transitions,
  zIndexes,
} as const;
