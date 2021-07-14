import React from 'react';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styles/theme';
import Layout from './components/Layout';
import Root from './components/Root';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Root />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
