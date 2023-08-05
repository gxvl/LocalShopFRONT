import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './TelaLogin';
import Login from './LoginDesktop';
import CadastroLojista from './CadastroLojistaDesktop';
import CadastroShopper from './CadastroShopper';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CadastroLojista />
  </React.StrictMode>
);
