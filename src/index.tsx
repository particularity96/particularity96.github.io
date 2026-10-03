import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Old links used hash routing (e.g. nicschilling.de/#/musical).
// Rewrite them to the real path before the router starts, so they keep working.
if (window.location.hash.startsWith('#/')) {
  window.history.replaceState(null, '', window.location.hash.slice(1));
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
