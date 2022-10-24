<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
=======
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<<<<<<< HEAD
  <BrowserRouter>
  <App />
  </BrowserRouter>
=======
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
>>>>>>> f4c20bcd95c272aec180645ab8bd98f6d4bf2061
);
