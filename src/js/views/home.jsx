import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card.jsx";


export const Home = () => {
	const {store} = useContext(Context)
	
	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<Card props={store.people}/>
			<h1 className="mx-3">Planets</h1>
			<Card props={store.planets}/>
			<h1 className="mx-3">Vehicles</h1>
			<CardG props={store.vehicle}/>
		</div>
	);
};
