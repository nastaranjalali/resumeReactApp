import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {getDirection} from "./localization/index";
document.getElementsByTagName("body")[0].setAttribute("dir",getDirection())

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


