import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Welcome from './pages/Welcome';
import CptClass from './pages/CptClass';
import Ending from './pages/Ending';
import LookUp from './pages/LookUp';
import Cert from './pages/Cert';

import Layout from './pages/Layout';

jQuery(function() {
  ReactDOM.render(
    <Router history={hashHistory}>
    	<Route path='/' component={Layout}>
    		<IndexRoute component={Welcome}/>
    		<Route path='CptClass' component={CptClass}/>
    		<Route path='Ending' component={Ending}/>
            <Route path='LookUp' component={LookUp}/>
    		<Route path='Cert/:arrayIndex' component={Cert}/>
    	</Route>
    </Router>,
    document.getElementById('app')
  );
})