import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { SearchUsers } from './components/SearchUsers';

import './css/App.css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <div className='App'>
      <Header />
      <SearchUsers />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
