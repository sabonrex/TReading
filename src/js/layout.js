import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import "../styles/home.css"
import { Home } from "./views/home.jsx";
import injectContext, { Context } from "./store/appContext";

import { NavbarMenu } from "./component/navbar.jsx";
import { Footer } from "./component/footer";
import { Characters } from "./views/people.jsx";

export const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<ScrollToTop>

							<NavbarMenu />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/people" element={<Characters />} />
								<Route path="/single/Loading..." element={<h1 className="mx-3 my-1">Not found!</h1>} />
							</Routes>

					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);