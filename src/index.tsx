import '~/styles/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const rootContainer = document.createElement('div');
document.body.appendChild(rootContainer);
const root = createRoot(rootContainer);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
