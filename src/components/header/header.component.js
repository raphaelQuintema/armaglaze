import PropTypes from "prop-types";
import React from "react";
import logo from "../../dist/images/logo.png";
import { Link } from "react-router-dom";

const Header = props => (
	<nav
		className="navbar navbar-expand-lg navbar-light static-top bg-yellow-navbar"
		style={{ paddingBottom: "0" }}
	>
		<div className={props.bg}>
			<Link to="/" className="navbar-brand">
				<img src={logo} alt="logo" />
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarResponsive"
				aria-controls="navbarResponsive"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarResponsive">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
						<Link className={props.navColor} to="/">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link className={props.navColor} to="/locks">
							The Locks
						</Link>
					</li>
					<li className="nav-item">
						<Link className={props.navColor} to="/contact">
							Contact Us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: `Armaglaze`
};

export default Header;
