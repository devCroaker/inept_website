import Header from '../nav/Header'
import Switch from './Switch'
import { BrowserRouter } from "react-router-dom"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch />
    </BrowserRouter>
  )
}

export default Router
