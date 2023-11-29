import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Wrap your App component with BrowserRouter
const Root = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Use createRoot for concurrent mode
ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
