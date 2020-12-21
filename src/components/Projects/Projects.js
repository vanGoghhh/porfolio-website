import React from "react";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects-container">
			<div className="projects-header">Projects</div>
			<div className="projects-content">
				<div className="projects-java-proj">
					<div className="projects-java-proj-header">Java</div>
					<div className="projects-java-proj-content">
						<div className="project-java-proj-candidates">
							<h1 style={{ fontSize: "30px" }}>Candidates</h1>
							<p style={{ textAlign: "left", paddingLeft: "15px" }}>
								CANdidates is a powerful contact management application
								optimised for job recruiters. <br />
								It has a Graphics User Interface (GUI) and most of the user
								interactions happen using a Command Line Interface (CLI).
							</p>
							<br />
							<a>Visit Repository</a>
						</div>
					</div>
				</div>
				<div className="projects-ios-proj">
					<div className="projects-ios-proj-header">IOS</div>
					<div className="projects-ios-proj-content">
						<div className="projects-ios-proj-debtfree">
							<h1 style={{ fontSize: "30px" }}>DebtFree</h1>
							<p style={{ textAlign: "left", paddingLeft: "15px" }}>
								DebtFree is an IOS application co-developed by a team of 2 which
								helps users to track their debts. <br /> This app is developed
								for NUS orbital 2020 and is awarded the Apollo 11- Adanced
								award.
							</p>
							<br />
							<a>Visit Repository</a>
						</div>
					</div>
				</div>
				<div className="projects-webdev-proj">
					<div className="projects-webdev-proj-header">Web-Dev</div>
					<div className="projects-webdev-proj-content">
						<div className="projects-webdev-proj-myweb">
                            <h1 style={{ fontSize: "30px" }}>Portfolio Website</h1>
                            <p style={{ textAlign: "left", paddingLeft: "15px" }}>
								This is my personal website which I made out of boredom. {">.>"}
							</p>
							<br />
							<a>Visit Repository</a>
						</div>
					</div>
				</div>
            </div>
		</div>
	);
};

export default Projects;
