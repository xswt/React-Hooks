import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextApp } from './provider/ContextApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextApp> 
      <App />
    </ContextApp>
);

reportWebVitals();
