import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {AuthcontextProvider} from "./Context/AuthContext";
import  RegistrationContextProvider  from './Context/RegistrationContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <AuthcontextProvider>
      <RegistrationContextProvider>
        <App />
      </RegistrationContextProvider>   
       
    </AuthcontextProvider>
    </BrowserRouter>
</React.StrictMode>
);