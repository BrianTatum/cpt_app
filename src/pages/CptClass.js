import React from 'react';
import {PanelGroup, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import ScorePanel from './layout_comps/ScorePanel';

export default class CptClass extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      activeKey: '1',
	      curentSection: 1,
	      totalSections: 4,
	      cptScore: 0,
	    };
	  }

	handleSelect(activeKey) {
    	this.setState({ activeKey });
	}

	render(){
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-3 col-xs-12'>
						<h1 className='text-md-right text-xs-center'>
							Section A:
						</h1>
					</div>
					<div className='col-md-9 col-xs-12'>
						<h2 className='text-md-left text-xs-center'>
							The Definitions and Effects of Sexual Abuse and Child Molestation
						</h2>
					</div>
				</div>		
				<div className='row'>
					<div className='col-md-9'>
						<PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect.bind(this)} accordion>
					        <Panel header="Section Video" eventKey="1">Panel 1 content</Panel>
					    	<Panel header="Test Questions" eventKey="2">Panel 2 content</Panel>
					    </PanelGroup>
					</div>
					<div className='col-md-3'>
						<ScorePanel section={this.state.curentSection} score={this.state.cptScore} totalSections={this.state.totalSections}  />
					</div>
				</div>
			</div>
		);
	}
}