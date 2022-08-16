import { Provider } from 'react-redux';
import React from 'react';
import store from './store';
import App from './App';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
     <Provider store={store}>
        <App />
    </Provider>
  </StrictMode>
);
