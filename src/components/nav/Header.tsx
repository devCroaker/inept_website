import { useState } from 'react'
import { Link } from "react-router-dom"
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import Menu from './Menu'

const Header = () => {
  const [open, setState] = useState(false)

  const toggleMenu = (open: boolean) => {
    setState(open)
  }

  return (
    <>
      <div style={{flexGrow: 1}}>
        <AppBar position="static">
        <Toolbar>
          <IconButton
          onClick={() => toggleMenu(true)}
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

      <Menu open={open} toggleMenu={toggleMenu} />
    </>
  )
}

export default Header
