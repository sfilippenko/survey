import createTheme from '@material-ui/core/styles/createTheme';

export default createTheme({
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
