import React from "react";
import { Context } from "../store/appContext";
import { CharactersCard } from "../component/people.jsx";
import { PlanetsCard } from "../component/planet.jsx";
import { VehicleCard } from "../component/vehicle.jsx";
import { useContext, useState } from "react";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [carga, setCarga] = useState(false);

	setInterval(() => {
		store.peopleList.length > 0 && store.planetsList.length > 0 ? setCarga(true) : "";
	}, 2000);
	//
	return (
		<div>
			<div className="cardsCont">
				<h1 id="mainTitle">Characters Gallery</h1>
				{carga ? (
					<div>
						{store.peopleList.map((item, index) => {
							return (
								<div key={index} className="displayCards">
									<CharactersCard
										name={item.name}
										gender={item.gender}
										hair_color={item.hair_color}
										eye_color={item.eye_color}
										pos={index}
									/>
								</div>
							);
						})}
					</div>
				) : (
					""
				)}
			</div>
			<div className="cardsCont">
				<h1 id="mainTitle">Planets Gallery</h1>
				{carga ? (
					<div>
						{store.planetsList.map((item, index) => {
							return (
								<div key={index} className="displayCards">
									<PlanetsCard
										name={item.name}
										rotation_period={item.rotation_period}
										climate={item.climate}
										terrain={item.terrain}
										population={item.population}
										pos={index}
									/>
								</div>
							);
						})}
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};