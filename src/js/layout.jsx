import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import Container, { Navbar } from "react-bootstrap";
import Col from "react-bootstrap";
import Row from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import People from "./views/people";
import Planets from "./views/planet";
import Vehicles from "./views/vehicle";
import { NavbarMenu } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<Container>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
				<Routes> 
					<Row>
						<Col>
						<NavbarMenu/>
						</Col>
					</Row>
					<Row>
						<Col>
						<Route element={<StarWars />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<People />} path="/people/:uid" />
                        <Route element={<Planets />} path="/planets/:uid" />
                        <Route element={<Vehicles />} path="/vehicles/:uid" />
                        <Route element={<h1>Not found! 404</h1>} path="*" />
						</Col>
					</Row>
                    </Routes>

				</ScrollToTop>
			</BrowserRouter>
		</Container>
	);
};

export default injectContext(Layout);
