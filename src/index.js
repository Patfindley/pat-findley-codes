import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';
import 'normalize.css'

import * as themes from './theme/Schema.json'
import { setThemeToLS } from './utils/storage.js';

// const router = <BrowserRouter> <App /> </BrowserRouter>;
const Router = () => {
  setThemeToLS('all-themes', themes.default);
  return (
  <BrowserRouter> <App /> </BrowserRouter>
  )
}

ReactDOM.render(
  <Router />, 
  document.getElementById('root')
  );
