import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const NavHeader = () =>
	<Navbar fixedTop className='main-color'>
	    <Navbar.Header>
	      <Navbar.Brand className='main-color'>
	        <a href="#">Child Protection Training</a>
	      </Navbar.Brand>
	      <Navbar.Toggle />
	    </Navbar.Header>
	    <Navbar.Collapse>
	      <Nav pullRight>
	        <NavItem eventKey={1} href="#/CptClass" className='main-color highlight'>Starting Training</NavItem>
	        <NavItem eventKey={2} href="#/LookUp" className='main-color highlight'>Print Certificate</NavItem>
	      </Nav>
	    </Navbar.Collapse>
	</Navbar>

export default NavHeader;