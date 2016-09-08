import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

export default class ScorePanel extends React.Component {
	render(){
		const panelHeader = (<h2 className='text-center'>Score Area</h2>);
		return (
			<Panel header={panelHeader}>
			    <ListGroup fill>
			      <ListGroupItem><strong>Score: {this.props.score}</strong></ListGroupItem>
			      <ListGroupItem>Section: {this.props.section} of {this.props.totalSections}</ListGroupItem>
			    </ListGroup>
			</Panel>
		)
	}
}