import { FC } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/theme';
import Layout from './components/Layout';
import Root from './components/Root';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Root />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
