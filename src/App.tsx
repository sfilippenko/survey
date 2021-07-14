import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import Layout from './components/Layout';
import Root from './components/Root';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Root />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
