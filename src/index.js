import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { kitty } from "./kitty";

ReactDOM.render(
    <div>
      <CardList kitty={kitty}/>
    </div>
  , document.getElementById('root'));
registerServiceWorker();
