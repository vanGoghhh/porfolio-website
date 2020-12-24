import React from "react";
import { Link } from "react-scroll";
import ParticlesConfig from "../Config/ConfigParticles";
import Particles from "react-particles-js";
import "./MainPage.css";
import MyPic from "../../assets/nigel-pic-lol.jpg";

const MainPage = () => {
	return (
		<div style={{ position: "relative", overflow: "hidden" }}>
			<Particles
				style={{ background: "#7989ac"}}
				params={ParticlesConfig}
			/>
			<div className="top-nav-bar-container">
				<ul className="top-nav-bar">
					<li className="link-name">
						<a href="#aboutMe" className="link-ref">
							About Me
						</a>
					</li>
					<li className="link-name">
						<a href="#portfolio" className="link-ref">
							Experiences
						</a>
					</li>
					<li className="link-name">
						<a href="#projects" className="link-ref">
							Projects
						</a>
					</li>
					<li className="link-name">
						<a href="#contacts" className="link-ref">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<span className="my-intro-container">
				<div className="pic-wrapper">
					<img src={MyPic} className="my-own-pic"></img>
				</div>
				<div className="my-desc">
					<div className="my-name">Nigel Ng</div>
					<div className="my-major">Computer Science Major at NUS</div>
					<div className="my-links">
						<span className="my-links-container">
							<li>
								<a
									href="https://www.linkedin.com/in/nigel-ng-ba1794197/"
									style={{ textDecoration: "none" }}
								>
									<ion-icon name="logo-linkedin"></ion-icon>
								</a>
							</li>
							<li>
								<a
									href="https://github.com/vanGoghhh?tab=repositories"
									style={{ textDecoration: "none" }}
								>
									<ion-icon name="logo-github"></ion-icon>
								</a>
							</li>
							<li>
								<a
									href="mailto:blackznigelng@gmail.com"
									style={{ textDecoration: "none" }}
								>
									<ion-icon name="mail"></ion-icon>
								</a>
							</li>
							<a></a>
							<a>Instagram</a>
						</span>
					</div>
				</div>
			</span>
		</div>
	);
};

export default MainPage;
