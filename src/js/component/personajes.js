import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Personajes = () => {
    const {
        store, actions
    } = useContext(Context)

    useEffect(() => {
        actions.obtenerPersonajes()
    }, [])
    return (
        <div>
            <h1>
                Personajes
            </h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.personajes.map((item, id) => (

                        <div key={id} className="card" style={{ width: "18rem", flex: "none", margin: "10px" }}>
                            <img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">genero: {item.gender}</p>
                                <p className="card-text">color de ojos: {item.eye_color}</p>
                                <Link to={"/single/" + (id + 1)} className="btn btn-primary">more info</Link>
                                <div className="btn btn-outline-dark float-end" onClick={() => actions.agregarFavoritos(item.name)}>
                                    ❤️
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
