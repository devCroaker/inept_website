import { Routes, Route } from "react-router-dom"
import { Typography } from '@mui/material'
import Header from "../nav/Header"

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={
        <Header />
      }>
        <Route path="/login" element={
          <Typography variant="h5" sx={{ml: '50px'}}>Working on it</Typography>
        } />
        <Route path="/" element={
          <Typography variant="h5" sx={{ml: '50px'}}>Under Construction</Typography>
        } />
      </Route>
    </Routes>
  )
}

export default AppRoutes
