import createTheme from '@material-ui/core/styles/createTheme';
import { BREAKPOINTS } from './consts';

export default createTheme({
  breakpoints: {
    values: {
      xs: BREAKPOINTS.XS,
      sm: BREAKPOINTS.SM,
      md: BREAKPOINTS.MD,
      lg: BREAKPOINTS.LG,
      xl: BREAKPOINTS.XL,
    },
  },
  overrides: {
    MuiIconButton: {
      root: {
        padding: 0,
        with: 'auto',
        height: 'auto',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ffffff',
          fontSize: 16,
          color: '#000000',
        },
        input: {
          '&::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
          },
          '&[type=number]': {
            '-moz-appearance': 'textfield',
          },
        },
      },
    },
  },
});
