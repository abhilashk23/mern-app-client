import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import './fonts/Gilroy/Gilroy-Black.ttf';
import './fonts/Gilroy/Gilroy-Bold.ttf';
import './fonts/Gilroy/Gilroy-Heavy.ttf';
import './fonts/Gilroy/Gilroy-Light.ttf';
import './fonts/Gilroy/Gilroy-Regular.ttf';
import './fonts/Gilroy/Gilroy-RegularItalic.ttf';
import './fonts/Gilroy/Gilroy-SemiBold.ttf';
import './fonts/Gilroy/Gilroy-Thin.ttf';
import './fonts/Gilroy/Gilroy-ThinItalic.ttf';
import './fonts/Marquis/MarquisSans-Regular.ttf';
import './fonts/Marquis/MarquisSans-Bold.ttf';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
