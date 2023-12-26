import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    useEffect(() => {
        actions.obtenerPlanetaIndividual(params.theid)
    }, [])
    return (
        <div className="container">
            <div className="card mb-3" style={{ maxWidth: "1000px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        {
                            params.theid == 1 ?
                                <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} class="img-fluid rounded-start" alt="..." /> :

                                <img src={"https://starwars-visualguide.com/assets/img/planets/" + (params.theid) + ".jpg"} className="img-fluid rounded-start" alt="..." />
                        }
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.planeta.name}</h5>
                            <p className="card-text">Climate: {store.planeta.climate}</p>
                            <p className="card-text">Population: {store.planeta.population}</p>
                            <p className="card-text">terrain: {store.planeta.terrain}</p>
                            <p className="card-text">diameter: {store.planeta.diameter}</p>
                            <p className="card-text">rotation period: {store.planeta.rotation_period}</p>
                            <p className="card-text">Orbital period: {store.planeta.orbital_period}</p>
                            <p className="card-text">Gravity: {store.planeta.gravity}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SinglePlanet.propTypes = {
    match: PropTypes.object
};
