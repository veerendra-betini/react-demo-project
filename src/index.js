import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Main from './Main';
import "./index.css";

ReactDOM.render(<Main />,
  //<React.StrictMode> <Main /> </React.StrictMode>,
  document.getElementById('root')
);