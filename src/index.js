import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'modern-normalize/modern-normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-woolf-hw-05-movies">
      {' '}
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
