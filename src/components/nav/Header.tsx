import { AppBar, Button, Container, Link as MuiLink, Stack, Typography, type SxProps, Grid, Box } from '@mui/material'
import type { Variant } from '@mui/material/styles/createTypography'
import { Outlet, Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <AppBar sx={{ height: '72px', backgroundColor: '#003DB2' }} position="sticky">
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={1}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '4px' }}>
              <img src="/inept_icon.png" alt="Inept Engineers Logo" height="64px" />
            </Box>
          </Grid>
          <Grid item xs={10}>
            <NavLink to="/" label="Inept Engineers" variant="h4" />
          </Grid>
          <Grid item xs={1} sx={{ justifyContent: 'flex-end' }}>
            <NavLink to="/login" label="Login" />
          </Grid>
        </Grid>
      </AppBar>
      <Outlet />
    </>
  )
}

export default Header

type NavLinkProps = {
  to: string
  label: string
  variant?: Variant
}

const NavLink = ({ to, label, variant = 'h5' }: NavLinkProps) => {
  return (
    <MuiLink
      component={RouterLink}
      to={to}
      sx={{
        color: 'white',
      }}>
      <Button sx={{ color: 'inherit' }}>
        <Typography
          variant={variant}
          sx={{
            textTransform: 'none',
          }}>
          {label}
        </Typography>
      </Button>
    </MuiLink>
  )
}
