import React from "react";
import abs1 from "../../dist/images/abs1.jpg";
import keys from "../../dist/images/keys.jpg";
import cylinder from "../../dist/images/cylinder.jpg";
import abs from "../../dist/images/abs.jpg";
import locks2 from "../../dist/images/locks2.jpg";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const Locks = () => (
	<div>
		<Header bg="container bg-black" navColor="nav-link text-white" />
		<div className="container">
			<div className="row bg-yellow">
				<div className="col-lg-12 col-md-12 col-sm-12 bg-black bg-key py-5"></div>
			</div>
			<div className="row py-4">
				<div className="col-lg-6 col-md-12 col-sm-12 ">
					<p className="text-center">
						<img src={keys} className="img-fluid" width="580" alt="locks" />
					</p>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<h4>ABS ULTIMATE SERIES EURO CYLINDER LOCK - KEYED ALIKE PAIR</h4>
					<br />
					<p className="text-blue text-1">£110.00</p>
					<br />
					<p>
						Simply choose your size, finish, key and lock quantities below, i.e.{" "}
						<strong>1 = 1 Pair in the size you have chosen.</strong>
					</p>
					<br />
					<p>
						These keyed alike locks are sold in pairs as standard and each lock
						comes with 3 keys. (6 in total).
					</p>
					<br />
					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">CONTACT US</strong>
					</button>
				</div>
			</div>

			<div className="row py-4">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<h4>ABS ULTIMATE SERIES NIGHTLATCH RIM CYLINDER</h4>
					<br />
					<p className="text-blue text-1">£40.00</p>
					<br />
					<p>
						Simply choose your size, finish, key and lock quantities below, i.e.{" "}
						<strong>1 = 1 Pair in the size you have chosen.</strong>
					</p>
					<br />
					<p>
						These keyed alike locks are sold in pairs as standard and each lock
						comes with 3 keys. (6 in total).
					</p>
					<br />
					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">CONTACT US</strong>
					</button>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 ">
					<p className="text-center">
						<img src={abs1} className="img-fluid" width="580" alt="locks" />
					</p>
				</div>
			</div>

			<div className="row py-4">
				<div className="col-lg-6 col-md-12 col-sm-12 ">
					<p className="text-center">
						<img src={cylinder} className="img-fluid" width="580" alt="locks" />
					</p>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12">
					<h4>ABS ULTIMATE SERIES EURO CYLINDER LOCK - THUMBTURN (QUANTUM)</h4>
					<br />
					<p className="text-blue text-1">£60.00</p>
					<br />
					<p>
						Abs Quantum Thumturn locks allow easy exit in case of an emergency
						and its easy internal locking and unlocking function means you only
						need to use the key when leaving and entering your house.
						Recommended by emergency services
					</p>
					<br />
					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">CONTACT US</strong>
					</button>
				</div>
			</div>

			<div className="row py-4">
				<div className="col-lg-6 col-md-12 col-sm-12">
					<h4>ABS ULTIMATE SERIES LOCKS HALF CYLINDER</h4>
					<br />
					<p className="text-blue text-1">£45.00</p>
					<br />
					<p>
						Simply choose your size, finish, key and lock quantities below, i.e.{" "}
						<strong>1 = 1 Pair in the size you have chosen.</strong>
					</p>
					<br />
					<p>
						These keyed alike locks are sold in pairs as standard and each lock
						comes with 3 keys. (6 in total).
					</p>
					<br />
					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">CONTACT US</strong>
					</button>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 ">
					<p className="text-center">
						<img src={abs} className="img-fluid" width="580" alt="locks" />
					</p>
				</div>
			</div>
			<div className="d-flex flex-column text-white pt-5 mb-3 border-bottom">
				<ul className="d-flex flex-row no-list-type pl-5">
					<li className="mr-5">
						<a className="text-yellow-link">FEATURES</a>
					</li>
					<li className="mr-5">
						<a className="text-yellow-link">SPECIFICATIONS</a>
					</li>
					<li>
						<a className="text-yellow-link">GUIDES & DOWNLOADS</a>
					</li>
				</ul>
			</div>
			<div className="row d-flex justify-content-center mt-4">
				<div className="col-lg-12 col-md-12 col-sm-12 mb-3">
					<h2 className="text-left">FEATURES</h2>
				</div>
				<div>
					<ul>
						<li>
							TS007 3 Star ratedout of the box - no need for cylinder guards or
							security handles
						</li>
						<li>SS312 Sold Secure Diamond Accredited</li>
						<li>No additional prep - easy retrofit</li>
						<li>
							Unique patented Snap Secure Technology - The Active Cam system
							locks the cylinder after a snap attack to keep intruders out
						</li>
						<li>Anti-Snap, Pick, drill & bump resistant</li>
						<li>British Standard Kitemark logo stamped</li>
						<li>Police preferred Secured by Design accreditation</li>
						<li>
							Available in keyed alike, thumbturn, singles** & double profile
							formats
						</li>
					</ul>
					<img src={locks2} className="img-fluid" alt="locks" />
				</div>
			</div>
			<Footer />
		</div>
	</div>
);

export default Locks;
