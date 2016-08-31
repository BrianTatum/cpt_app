import jQuery from 'jquary';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'

import Welcome from './pages/Welcome';
import Cert from './pages/Cert';
import Ending from '.pages/Ending';
import Questions from '.pages/Questions';
import Video from '.pages/Video';

import Layout from './pages/Layout';

jQuery(function() {
  ReactDOM.render(
    <Router>
    	<Route path='/' component={Layout}>
    		<IndexRoute componet={Welcome}/>
    		<Route path='Video' componet={Video}/>
    		<Route path='Questions' componet={Questions}/>
    		<Route path='Ending' componet={Ending}/>
    		<Route path='Cert' componet={Cert}/>
    	</Route>
    </Router>,
    document.getElementById('app')
  );
})