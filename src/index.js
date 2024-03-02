import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-woolf-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
