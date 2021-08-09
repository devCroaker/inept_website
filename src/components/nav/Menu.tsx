import { FC } from 'react'
import { Divider, Drawer, List } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HomeIcon from '@material-ui/icons/Home'

import MenuItem from './MenuItem'

type MenuProps = {
  open: boolean,
  toggleMenu: (open: boolean) => void
}

const Menu: FC<MenuProps> = (props) => {
  const { open, toggleMenu } = props

  return (
    <Drawer anchor="left" open={open} onClose={() => toggleMenu(false)}>
      <List style={{width: 250}}>
        <MenuItem linkTo="/" onClick={() => toggleMenu(false)} icon={<HomeIcon />} text="Home" />
      </List>
      <Divider />
      <List>
        <MenuItem linkTo="/login" onClick={() => toggleMenu(false)} icon={<AccountCircleIcon />} text="Login" />
      </List>
    </Drawer>
  )
}

export default Menu
