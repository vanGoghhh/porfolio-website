import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
	return (
		<div className="portfolio-container" id="portfolio">
			<div className="portfolio-header">Resume</div>

			<div className="portfolio-desc">
				<div className="portfolio-exp">
					<div className="portfolio-exp-header">Experience</div>
					<div className="portfolio-exp-content">
						<ul className="portfolio-exp-bullet-points">
							<li className="portfolio-exp-bullet">
								<div className="portfolio-exp-title">
									MatcHub - Software developer intern
								</div>
								<div className="portfolio-exp-location-and-date">
									December 2020 - Present
								</div>
								<div className="portfolio-exp-desc">
									<p>
										Developed MatcHub's web portal. Update existing code for
										dashboards. Ensure mobile responsiveness of web portal.
										Conducted testing and perform edits and reiterations.
									</p>
								</div>
							</li>
							<li className="portfolio-exp-bullet-end">
								<div className="portfolio-exp-title">
									NUS - Teaching Assistant
								</div>
								<div className="portfolio-exp-location-and-date">
									August 2020 - December 2020
								</div>
								<div className="portfolio-exp-desc">
									<p>
										Taught a group of 8 students the basics of Java and
										Object-Oriented Programming. Conducted weekly lab sessions
										and graded assignments.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div className="portfolio-edu">
					<div className="portfolio-edu-header">Education</div>
					<div className="portfolio-edu-content">
						<ul className="portfolio-exp-bullet-points">
							<li className="portfolio-exp-bullet">
								<div className="portfolio-edu-title">
									Bachelor's in Computer Science
								</div>
								<div className="portfolio-edu-school">
									National University of Singapore
								</div>
								<div className="portfolio-edu-date">August 2019 - Present</div>
								<div className="portfolio-edu-desc">
									Computer Science Sophomore at NUS. <br />
									Current Cap: 4.4
								</div>
							</li>
							<li className="portfolio-exp-bullet-end">
								<div className="portfolio-edu-title">A levels</div>
								<div className="portfolio-edu-school">
									Temasek Junior College
								</div>
								<div className="portfolio-edu-date">
									January 2015 - December 2016
								</div>
								<div className="portfolio-edu-desc">
									Achieved 4H2 Distinctions and 2 H1 Distinctions for the A
									Levels exam
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
