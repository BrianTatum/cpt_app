import React from 'react';

import NavHeader from './layout_comps/NavHeader';
import PageFooter from './layout_comps/PageFooter';

export default class Layout extends React.Component {
	render(){
		const bodyDown = {marginTop: '70px'};
		return (
			<div style={bodyDown}>
				<NavHeader />
								
				{this.props.children}

				<PageFooter />
			</div>
		);
	}
}