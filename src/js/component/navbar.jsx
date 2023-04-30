import React from "react";
import { Link } from "react-router-dom";
import Container, { Nav } from "react-bootstrap";
import Col from "react-bootstrap";
import Row from "react-bootstrap";
import { Navbar} from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const NavbarMenu = () => {
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to = "/">
					<Image
						src="src/img/Star_Wars_Logo..png"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
			<Nav className='mr-auto'>
			<Link className="nav-link" to = "/planet">Planets</Link>
			<Link className="nav-link" to = "/people">People</Link>
			<Link className="nav-link" to = "/vehicle">Vehicles</Link>

			</Nav>
				<DropdownButton id="dropdown-basic-button" title="Favourites">
      				<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
      				<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
      				<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    			</DropdownButton>
		</Navbar>
	);
};
