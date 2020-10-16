import React from 'react';
import ReactDOM from 'react-dom';

import {Header} from './components/Header';
import {SerchUsers} from './components/SerchUsers';
import './css/App.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <div className="App">
        <Header />
        <SerchUsers />
    </div> 
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
