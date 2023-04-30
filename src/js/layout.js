import React from "react";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home.jsx";
import injectContext from "./store/appContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Planets } from "./views/pplanet.jsx";
import { Vehicle } from "./views/vvehicle.jsx";
import { Characters } from "./views/ppeople.jsx";
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
								<Route path="/pplanet" element={<Planets/>} />
								<Route path="/ppeople" element={<Characters/>} />
								<Route path="/vvehicle" element={<Vehicle/>} />
								<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
							</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
