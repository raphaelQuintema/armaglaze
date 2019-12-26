import fb from "../../dist/images/fb.jpg";
import linkedin from "../../dist/images/linkedin.jpg";
import twitter from "../../dist/images/twitter.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="row d-flex flex-column bg-black text-white pt-5 mb-3">
			<ul className="d-flex flex-row no-list-type pl-5">
				<li className="mr-5">
					<Link className="text-white-link" to="/">
						HOME
					</Link>
				</li>
				<li className="mr-5">
					<Link className="text-white-link" to="/locks">
						THE LOCKS
					</Link>
				</li>
				<li>
					<Link className="text-white-link" to="/contact">
						CONTACT US
					</Link>
				</li>
			</ul>
			<ul className="d-flex flex-row no-list-type pl-5 mb-5">
				<li className="mr-3">
					<img src={fb} alt="fb" />
				</li>
				<li className="mr-3">
					<img src={linkedin} alt="linkedin" />
				</li>
				<li>
					<img src={twitter} alt="twitter" />
				</li>
			</ul>
			<div className="pl-5 bg-last-footer">
				@COPYRIGHT 2019. ARMAGLAZE WINDOWS. ALL RIGHTS RESERVED.
			</div>
		</div>
	);
};

export default Footer;
