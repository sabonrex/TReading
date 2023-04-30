import React, { useEffect, useContext } from "react";
//import { Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Vehicle = () => {
	const { vehicleid } = useParams();
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchVehicle();
	}, []);
	return (
		<>
			<div className="card">
				<div className="card-horizontal row col-md">
					<div className="img-square-wrapper">
						<img
							className=""
							src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest/scale-to-width-down/403?cb=20131214162357"
							alt="Card image cap"
						/>
					</div>
					<div className="card-body">
						<h1>{store.vehicle[vehicleid].name}</h1>
						<p className="card-text">Lorem ipsum text</p>
					</div>
				</div>
				<div
					className="card-footer"
					style={{ color: "red", display: "inline-flex", borderTopColor: "red", margin: "auto" }}>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Rotation Period:</p>
						{store.vehicle[vehicleid].rotation_period}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Consumables:</p>
						{store.vehicle[vehicleid].consumables}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Length:</p>
						{store.vehicle[vehicleid].length}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Manufacturer</p>
						{store.vehicle[vehicleid].manufacturer}
					</h6>
					<h6 style={{ padding: "5px", margin: "5px" }}>
						<p>Created:</p>
						{store.vehicle[vehicleid].created}
					</h6>
				</div>
			</div>
		</>
	);
};