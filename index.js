import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import "./styles/App.scss";
import  "./styles/colors.scss";
import "./styles/Home.scss";
import "./styles/Header.scss";
import "./styles/Footer.scss";
import "./styles/mediaquery.scss";
import "./styles/Login.scss";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App />
   
  </React.StrictMode>

);

export const server = `https://api.coingecko.com/api/v3`;