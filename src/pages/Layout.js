import React from 'react';
import {Link} from 'react-router';

import NavHeader from './layout_comps/NavHeader';
import PageFooter from './layout_comps/PageFooter';

export default class Layout extends React.Component {
	render(){
		return (
			<div>
				<NavHeader />
				<h1>Child Protection Training</h1>
				<Link to='/Welcome' className='btn btn-success'>Welcome</Link>
				<Link to="/Video" className='btn btn-success'>Video</Link>
				<Link to='/Questions' className='btn btn-success'>Questions</Link>
				<Link to='/Ending' className='btn btn-success'>Ending</Link>
				<Link to='/Cert' className='btn btn-success'>Cert</Link>
				
				{this.props.children}

				<PageFooter />
			</div>
		);
	}
}