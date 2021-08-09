import { Switch as ReactSwitch, Route } from "react-router-dom"

const Switch = () => {
  return (
    <ReactSwitch>
        <Route path="/login">
        <h3 style={{marginLeft: '50px'}}>Working on it</h3>
        </Route>
        <Route path="/">
        <h2 style={{marginLeft: '50px'}}>Under Construction</h2>
        </Route>
      </ReactSwitch>
  )
}

export default Switch
