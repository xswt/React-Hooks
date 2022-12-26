import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ContextApp } from './provider/ContextApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextApp> {/* Se pone el provider que engloba a App y todo lo que se ponga dentro de esta. */}
      <App />
    </ContextApp>
  </React.StrictMode>
);

reportWebVitals();
