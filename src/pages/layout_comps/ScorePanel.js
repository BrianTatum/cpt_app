import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

const ScorePanel = ({score, section, totalSections, time}) =>
	<Panel header={(<h2 className='text-center'>Training Summary</h2>)}>
	    <ListGroup fill>
	      <ListGroupItem><strong>Score: {score}</strong></ListGroupItem>
	      <ListGroupItem>Section: {section} of {totalSections}</ListGroupItem>
	      <ListGroupItem>Time: {time}</ListGroupItem>
	    </ListGroup>
	</Panel>

export default ScorePanel;