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
      '@global': {},
    },
  },
});
