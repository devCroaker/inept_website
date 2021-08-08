import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { AppBar, Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home'

const App = () => {
  const [state, setState] = useState({
    drawer: false
  })

  const toggleDrawer = (open: boolean) => {
    setState({...state, drawer: open})
  }

  const list = () => (
    <div style={{width: 250}}>
      <List>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItem onClick={() => toggleDrawer(false)} button key="Home">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <ListItem onClick={() => toggleDrawer(false)} button key="Login">
            <ListItemIcon><AccountCircleIcon /></ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <Router>
      <div style={{flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => toggleDrawer(true)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flexGrow: 1}}>Inept Engineers</Typography>
            <Link to="/login" style={{ textDecoration: 'none', color: 'white', float: 'right', marginRight: '25px' }}>
              <Button color="inherit">Login</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>

      <Drawer anchor="left" open={state.drawer} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>

      <Switch>
        <Route path="/login">
          <h3 style={{marginLeft: '50px'}}>Also Under Construction</h3>
        </Route>
        <Route path="/">
          <h2 style={{marginLeft: '50px'}}>Under Construction</h2>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
