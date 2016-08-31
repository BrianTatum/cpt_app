import React from 'react';

export default class NavHeader extends React.Component {
	render(){
		const lineButton = {
			backgroundColor: 'white'
		};
		return (
			<div className='navbar navbar-fixed-top main-color'>
			    <div className='container'>
			        <div className='navbar-header'>
			          <a href='/' className='navbar-brand main-color'>
			              <span>Child Protection Training</span>
			          </a>
			          <button type='button' className='navbar-toggle main-color highlight'
			                                data-toggle='collapse'
			                                data-target='.navbar-collapse'>
			            <span className='sr-only'>Toggle Navigation</span>
			            <span className='icon-bar' style={lineButton}></span>
			            <span className='icon-bar' style={lineButton}></span>
			            <span className='icon-bar' style={lineButton}></span>
			          </button>
			        </div>
			        <ul className='nav navbar-nav navbar-right collapse navbar-collapse'>
			            <li><a href='buildings.html' className='main-color highlight'>Start</a></li>
			            <li><a href='buildings.html' className='main-color highlight'>Find Cert</a></li>
			        </ul>
			    </div>
			</div>
		);
	}
}