import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import "./index.css"
import "./Pages/Home/home.css";
import "./Pages/About/about.css";
import "./Pages/Portfolio/portfolio.css"
import "./Pages/Contact/contact.css"

import App from './App';


import { BrowserRouter } from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

