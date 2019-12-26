import React from "react";
import abs1 from "../../dist/images/abs.jpg";
import keys from "../../dist/images/keys.jpg";
import cylinder from "../../dist/images/cylinder.jpg";
import abs from "../../dist/images/abs.jpg";
import lockedin from "../../dist/images/lockedin.jpg";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";

const IndexPage = () => (
	<div>
		<Header bg="container bg-yellow" navColor="nav-link" />
		<div className="container bg-white">
			<div className="row bg-yellow">
				<div className="col-lg-6 col-md-12 col-sm-12 bg-gun py-5"></div>
				<div className="col-lg-6 col-md-12 col-sm-12 text-right">
					<h1>HIGH SECURITY AVOCET LOCKS SUPPLIED & INSTALLED BY ARMAGLAZE</h1>
					<button type="button" className="btn btn-dark">
						LEARN MORE
					</button>
				</div>
			</div>
			<div className="row mt-3 mb-2">
				<div className="col-lg-6 col-md-12 col-sm-12 bg-black abs-box text-white box-mr-1">
					<p className="text-center">
						<img src={abs1} className="img-fluid" alt="locks" />
					</p>
					<p>
						Nightlatch Rim Cylinder with 3 keys and card Supplied & Fitted for
						Just £79.00+ Vat
					</p>

					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">LEARN MORE</strong>
					</button>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 bg-black abs-box text-white box-ml-1">
					<p className="text-center">
						<img src={keys} className="img-fluid" alt="locks" />
					</p>
					<p>
						Keyed alike cylinders ( French Doors ) Supplied & Fitted For Just
						£130.00+ Vat
					</p>

					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">LEARN MORE</strong>
					</button>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12 bg-black abs-box text-white box-mr-1">
					<p className="text-center">
						<img src={cylinder} className="img-fluid" alt="locks" />
					</p>

					<p>
						Cylinder with internal thumbturn, 3 keys & card Supplied & Fitted
						for Just £88.00+ Vat
					</p>

					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">LEARN MORE</strong>
					</button>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 bg-black abs-box text-white box-ml-1">
					<p className="text-center">
						<img src={abs} className="img-fluid" alt="locks" />
					</p>
					<p>
						Half Cylinder (no external access) Supplied & Fitted For Just
						£81.00+ Vat
					</p>

					<button type="button" className="btn btn-dark">
						<strong className="text-yellow">LEARN MORE</strong>
					</button>
				</div>
			</div>

			<div className="row py-4">
				<div className="col-lg-12 col-md-12 col-sm-12 mb-3">
					<h2 className="text-center">Ultimate Security</h2>
				</div>

				<div className="col-lg-6 col-md-12 col-sm-12">
					<ul>
						<li>SS312 Sold Secure Diamond Grade</li>
						<li>3 Star British Kitemark - TS007:2014 (KM 586135)</li>
						<li>
							Secured by Design Accredited (Police preferred specification)
						</li>
						<li>Patented Active Cam Technology - Internallock-off system</li>
						<li>Pick, Drill & Bump Resistant</li>
						<li>Pin-in-Pin and magnetic pin technology</li>
						<li>6 Trap Pins for advanced pick resistance</li>
						<li>18 Anti-drill zones</li>
						<li>Double, single and thumbturn formats available</li>
						<li>Three keys per cylinder</li>
						<li>Secure online key registering</li>
						<li>Keyed alike key/key pairs are available ex stock</li>
						<li>Key alike with ABS euro cylinders, rim cylinders & padlocks</li>
					</ul>
				</div>
				<div className="col-lg-6 col-md-12 col-sm-12 bg-tech"></div>
			</div>
			<div className="row">
				<div className="col-lg-6 col-md-12 col-sm-12 bg-tech1"></div>
				<div className="col-lg-6 px-5 bg-black abs-box text-white">
					<p className="text-center">
						<img src={lockedin} className="img-fluid" alt="locks" />
					</p>
					<p>
						Nightlatch Rim Cylinder with 3 keys and card Supplied & Fitted for
						Just £79.00+ Vat
					</p>
				</div>
			</div>
			<div className="row d-flex justify-content-center mt-4">
				<div className="col-lg-12 col-md-12 col-sm-12 mb-3">
					<h2 className="text-center">Contact Us</h2>
				</div>
				<div>
					<form>
						<div className="form-row">
							<div className="form-group col-md-6">
								<input
									type="text"
									className="form-control"
									id="inputFullname"
									placeholder="Your Name"
								/>
							</div>
							<div className="form-group col-md-6">
								<input
									type="email"
									className="form-control"
									id="inputEmail4"
									placeholder="Email"
								/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col-md-6">
								<input
									type="text"
									className="form-control"
									id="subject"
									placeholder="Subject"
								/>
							</div>
							<div className="form-group col-md-6">
								<input
									type="text"
									className="form-control"
									id="inputEgroupmail4"
									placeholder="Phone Number"
								/>
							</div>
						</div>
						<div className="form-group">
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"
								placeholder="Message"
							></textarea>
						</div>
						<p className="text-center">
							<button type="submit" className="text-center btn btn-dark">
								Submit
							</button>
						</p>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	</div>
);

export default IndexPage;
