import React from "react";
import "./AboutMe.css";
import Pdf from "../files/Nigel_Ng_Resume.pdf";

const AboutMe = () => {
	return (
		<div className="about-container" id="aboutMe">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
				<path
					fill="#7989ac"
					fill-opacity="1"
					d="M0,256L48,266.7C96,277,192,299,288,288C384,277,480,235,576,208C672,181,768,171,864,181.3C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
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
		</div>
	);
};

export default AboutMe;
