import { Amplify, Auth } from 'aws-amplify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { config } from './AwsConfig';
import Router from './components/router/Router';

// Amplify for authentication
Amplify.configure(config);

// MUI theme
const theme = createTheme();

const App = () => {
  console.log(process.env);
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
