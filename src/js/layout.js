import React from "react";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planets } from "./component/planet.jsx";
import { Vehicle } from "./component/vehicle.jsx";
import { Characters } from "./component/people.jsx";
import { NavbarMenu } from "./component/navbar.jsx";
import { Footer } from "./component/footer";


export const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>

							<NavbarMenu />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/planet" element={<Planets/>} />
								<Route path="/people" element={<Characters/>} />
								<Route path="/vehicle" element={<Vehicle/>} />
								<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
							</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
