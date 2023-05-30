import { Typography } from '@mui/material'
import Header from '../nav/Header'
import { useRoutes } from 'react-router-dom'

const Router = () => {
  const mainRoutes = {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: (
          <Typography variant="h5" sx={{ ml: '50px' }}>
            Under Construction
          </Typography>
        ),
      },
      {
        path: '/login',
        element: (
          <Typography variant="h5" sx={{ ml: '50px' }}>
            Working on it
          </Typography>
        ),
      },
    ],
  }

  const routing = useRoutes([mainRoutes])

  return <>{routing}</>
}

export default Router
