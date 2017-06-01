import React from 'react';
import ReactDOM from 'react-dom';
// import { Router, Route, Link, hashHistory } from 'react-router' /** router@3 */
import {HashRouter, Route, Redirect} from 'react-router-dom'; /** router@4 */

import App from './containers/App.js';
import About from './containers/About.js';
import Test from './containers/Test.js';

ReactDOM.render((
  <HashRouter>
    <div>
      <Redirect to='/about'/>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/test" component={Test} />
    </div>
  </HashRouter>
), document.getElementById('root'));
