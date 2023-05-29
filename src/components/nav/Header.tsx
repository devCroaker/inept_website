import { AppBar, Button, Container, Link as MuiLink, Stack, Typography, type SxProps } from '@mui/material'
import type { Variant } from '@mui/material/styles/createTypography'
import { Outlet, Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <AppBar sx={{ height: '55px' }} position="sticky">
        <Container disableGutters maxWidth={false}>
          <Stack direction="row" justifyContent="space-between">
          <NavLink
              to="/"
              label="Inept Engineers"
              sx={{
                ml: '16px',
              }}
              variant="h4"
            />
            <NavLink
              to="/login"
              label="Login"
              sx={{
                mr: '16px',
                alignSelf: 'center',
              }}
            />
          </Stack>
        </Container>
      </AppBar>
      <Outlet />
    </>
  )
}

export default Header

type NavLinkProps = {
  to: string
  label: string
  sx?: SxProps
  variant?: Variant
}

const NavLink = ({
  to,
  label,
  sx,
  variant = 'h5'
}: NavLinkProps) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={{
        color: 'white',
        ...sx,
      }}
    >
      <Button sx={{color: 'inherit'}}>
        <Typography
          variant={variant}
          sx={{
            textTransform: 'none',
          }}
        >
          {label}
        </Typography>
      </Button>
    </MuiLink>
  )
}
