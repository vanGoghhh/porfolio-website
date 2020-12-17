import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<div className="about-container">
			<svg viewBox="0 50 500 500" preserveAspectRatio="xMinYMin meet">
				<path
					d="M0, 100 C150, 250 350, 
                0 500, 100 L500, 00 L0, 0 Z"
					style={{ fill: "#6C28C5", stroke: "none" }}
				></path>
			</svg>
			<div className="about-intro-container">
				<div className="about-hello">Hello</div>
				<div className="about-desc">
					Hi I am Nigel a programming enthusiats whose interests lies <br />
					in front-end development, reading and the outdoors
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
