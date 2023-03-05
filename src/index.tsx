import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { subscribeStoreToLocal } from './app/store';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Footer from './components/Footer/Footer';
import reportWebVitals from './reportWebVitals';
import './index.css';

// When there are changes to the Redux store, save
// the state in the browser's local storage.
subscribeStoreToLocal(store);

const container = document.getElementById('root')!;
const root = createRoot(container);

// Set up sticky footer with Flexbox by rendering an array.
const content = [<App key="content1" />, <Footer key="content2" />]

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        {content}
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
