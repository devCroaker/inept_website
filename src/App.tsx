import { config } from './config'
import Router from './components/router/Router'

const App = () => {

  console.log(process.env)
  return (
    <Router />
  );
}

export default App;
