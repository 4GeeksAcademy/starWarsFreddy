import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Navbar = () => {

	const { store, actions } = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/2560px-Star_Wars_Logo.svg.png" style={{ width: "100px" }} />
			</Link>
			<div className="nav-item dropdown">

				<a className="nav-link dropdown-toggle"
					href="#" role="button"
					data-bs-toggle="dropdown"
					aria-expanded="false" >
					Favoritos 
				</a>
				<ul className="dropdown-menu">
				{store.favoritos.map((item,id) => (
					<li key={id}>
						{item}
					</li>
				))}
				</ul>
			</div>
		</nav>
	);
};
