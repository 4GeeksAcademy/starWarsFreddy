import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.obtenerPersonajeIndividual(params.theid)
	}, [])
	return (
		<div className="container">
			<div className="card mb-3" style={{maxWidth: "720px"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/"+(params.theid)+".jpg"} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{store.personaje.name}</h5>
							<p className="card-text">Gender: {store.personaje.gender}</p>
							<p className="card-text">Birth Year: {store.personaje.birth_year}</p>
							<p className="card-text">Height: {store.personaje.height}</p>
							<p className="card-text">Mass: {store.personaje.mass}</p>
							<p className="card-text">Skin Color: {store.personaje.skin_color}</p>
							<p className="card-text">Eye Color: {store.personaje.eye_color}</p>
							<p className="card-text">Hair Color: {store.personaje.hair_color}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
