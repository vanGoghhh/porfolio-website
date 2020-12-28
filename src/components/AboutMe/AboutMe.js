import React from "react";
import "./AboutMe.css";
import Pdf from "../files/Nigel_Ng_Resume.pdf";

const AboutMe = () => {
	return (
		<div className="about-container" id="aboutMe">
			<div className="wave-container">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					height="480px"
					preserveAspectRatio="none"
				>
					<path
						fill="#7989ac"
						fill-opacity="1"
						d="M0,288L48,282.7C96,277,192,267,288,261.3C384,256,480,256,576,250.7C672,245,768,235,864,218.7C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
					></path>
				</svg>
			</div>
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
