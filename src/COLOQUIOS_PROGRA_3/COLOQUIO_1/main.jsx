import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/main.css';

console.log('main.jsx is loaded');

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
