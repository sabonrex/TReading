import React from "react";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import { PlanetsCard } from "../component/PlanetCard.jsx";
import { PeopleCard } from "../component/PeopleCard.jsx";
import { VehicleCard } from "../component/VehicleCard.jsx";

export const Home = () => {
	const {store} = useContext(Context)
	
	return (
		<div>
			<h1 className="mx-3">Characters</h1>
			<PeopleCard props={store.peopleList}/>
			<h1 className="mx-3">Planets</h1>
			<PlanetsCard props={store.planetsList}/>
			<h1 className="mx-3">Vehicles</h1>
			<VehicleCard props={store.vehicleList}/>
		</div>
	);
};