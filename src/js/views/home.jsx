import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/people.jsx";
import { PlanetsCard } from "../component/planet.jsx";
import { VehicleCard } from "../component/vehicle.jsx";


export const Home = () => {
	const {store} = useContext(Context)
	
	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<CharactersCard props={store.people}/>
			<h1 className="mx-3">Planets</h1>
			<PlanetsCard props={store.planets}/>
			<h1 className="mx-3">Vehicles</h1>
			<VehicleCard props={store.vehicle}/>
		</div>
	);
};
