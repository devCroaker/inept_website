import Amplify, { Auth } from 'aws-amplify';
import { config } from './AwsConfig'
import Router from './components/router/Router'
Amplify.configure(config)

const App = () => {

  console.log(process.env)
  return (
    <Router />
  );
}

export default App;
