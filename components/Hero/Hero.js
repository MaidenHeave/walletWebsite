import React from "react";

export default function Hero() {
	return (
		<section className="hero-welcome-wrapper hero-1">
			<div className="single-slide text-white">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-12 col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-contents">
								<h1>Crypto made easy with mobile money and DeFi</h1>
								<p>
								Trade crypto effortlessly and securely with our app - the easiest, safest, and fastest way. Trust us for your international money transfers and online money transfer services - the safest methods available
								</p>
								<a href="#" className="app-download-btn">
									<img src="img/apple.png" alt="" />
								</a>
								<a href="#" className="app-download-btn">
									<img src="img/android.png" alt="" />
								</a>
								<div className="tri-arrow">
									<img src="img/icons/tir-shape.svg" alt="" />
								</div>
							</div>
						</div>
						<div className="col-xl-5 col-12 text-xl-end col-lg-10 offset-lg-1 offset-xl-0">
							<div className="hero-mobile mt-5 mt-xl-0">
								<img src="img/mobile-hero1.png" alt="wallet app" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
