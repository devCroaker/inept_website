import '~/styles/index.scss'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import { BrowserRouter } from 'react-router-dom'

const rootContainer = document.createElement('div')
document.body.appendChild(rootContainer)
const root = createRoot(rootContainer)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
