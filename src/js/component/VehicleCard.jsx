import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const VehicleCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
				src="http://pm1.narvii.com/7060/d019395f1ad6cdec7a067a7c56a0e8f2b0733a6ar1-450-450v2_00.jpg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">Name: {props.name}</h5>
				<p className="card-text">Consumables: {props.consumables} </p>
				<p className="card-text">Length: {props.length}</p>
				<p className="card-text">Created: {props.created}</p>
				<div className="btn-group" role="group" aria-label="Basic mixed styles example">
					<Link to={"/planets/" + props.pos}>
						<button type="button" className="btn btn-primary m-1">
							Learn more!
						</button>
					</Link>
					{store.favorites.includes(props.name) ? null : (
						<Button onClick={() => actions.setFavorites(props.name)} variant="outline-warning">
							<i className="fas fa-heart" />
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};

	VehicleCard.propTypes = {
	name: PropTypes.string,
	consumables: PropTypes.string,
	length: PropTypes.string,
	created: PropTypes.string,
	manufacturer: PropTypes.string
};