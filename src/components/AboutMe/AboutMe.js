import React from "react";
import "./AboutMe.css";
import Pdf from "../files/Nigel_Ng_Resume.pdf";

const AboutMe = () => {
	return (
		<div className="about-container" id="aboutMe">
			<div className="about-intro-container">
				<div className="about-hello">Hello</div>
				<div className="about-desc">
					Hi I am Nigel a computer science sophomore whose interests lies in{" "}
					<br />
					in web development, reading and the outdoors
				</div>
				<div>
					<a href={Pdf}>
						<button className="resume-button">Download my resume</button>
					</a>
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
