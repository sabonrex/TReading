import React, { useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const PlanetsCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="card displaycards p-1 m-2" style={{ width: "18rem" }}>
			<img
          		className="card-img-top"
          		src={props.image}
          		alt="Card image cap"
        		></img>
			<div className="card-body">
				<h5 className="card-title">Name: {props.name}</h5>
				<p className="card-text">Rotation Period: {props.rotation_period} </p>
				<p className="card-text">Climate: {props.climate}</p>
				<p className="card-text">Population: {props.population}</p>
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

PlanetsCard.propTypes = {
	name: PropTypes.string,
	rotation_period: PropTypes.string,
	climate: PropTypes.string,
	population: PropTypes.string,
	pos: PropTypes.number
};