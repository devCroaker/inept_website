import { FC, ReactNode } from 'react'
import { Link } from "react-router-dom"
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

type MenuItemProps = {
  linkTo: string,
  onClick: () => void,
  icon: ReactNode,
  text: string
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { linkTo, onClick, icon, text } = props

  return (
    <>
      <Link to={linkTo} style={{ textDecoration: 'none' }}>
          <ListItem onClick={onClick} button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        </Link>
    </>
  )
}

export default MenuItem
