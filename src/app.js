import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Welcome from './pages/Welcome';
import Cert from './pages/Cert';
import Ending from './pages/Ending';
import Questions from './pages/Questions';
import Video from './pages/Video';

import Layout from './pages/Layout';

jQuery(function() {
  ReactDOM.render(
    <Router history={hashHistory}>
    	<Route path='/' component={Layout}>
    		<IndexRoute component={Welcome}/>
            <Route path='Welcome' component={Welcome}/>
    		<Route path='Video' component={Video}/>
    		<Route path='Questions' component={Questions}/>
    		<Route path='Ending' component={Ending}/>
    		<Route path='Cert' component={Cert}/>
    	</Route>
    </Router>,
    document.getElementById('app')
  );
})