import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
	return (
		<div className="about-container" id="aboutMe">
			<div className="about-intro-container">
				<div className="about-hello">Hello</div>
				<div className="about-desc">
					Hi I am Nigel a programming enthusiats whose interests lies <br />
					in front-end development, reading and the outdoors
				</div>
			</div>
			<svg viewBox="0 50 500 200" preserveAspectRatio="xMinYMin meet">
				<path
					d="M0, 100 C150, 250 350, 
                0 500, 100 L700, 00 L0, 0 Z"
					style={{ fill: "#7989ac", stroke: "none" }}
				></path>
			</svg>
		</div>
	);
};

export default AboutMe;
