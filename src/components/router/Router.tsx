import AppRoutes from './AppRoutes'
import { BrowserRouter } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default Router
