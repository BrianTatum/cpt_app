import React from 'react';
import {PanelGroup, Panel} from 'react-bootstrap';

export default class CptClass extends React.Component {
	getInitialState() {
	    return {
	      activeKey: '1'
	    };
	}

	handleSelect(activeKey) {
		this.setState({ activeKey });
	}

	render(){
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-3'>
						<h2>Score Area</h2>
					</div>
					<div className='col-md-9'>
						<PanelGroup activeKey='1' onSelect={this.handleSelect} accordion>
					        <Panel header="Video" eventKey="1">
					        	Panel 1 content
					        </Panel>
					    	<Panel header="Questions" eventKey="2">
					    		Panel 2 content
					    	</Panel>
					    </PanelGroup>
					</div>
				</div>
			</div>
		);
	}
}