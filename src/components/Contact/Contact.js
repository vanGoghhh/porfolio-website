import React, { Component } from "react";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}
	render() {
		return (
			<div className="contact-container" id="contacts">
				<div className="contact-header">Contact</div>
				<div className="contact-friendly-msg">
					I'd love to connect with you!
				</div>
				<form className="contact-form">
					<div className="contact-input">
						<input type="text" className="input-name"></input>
						<label className="input-name-label">Name</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<input type="text" className="input-mail"></input>
						<label className="input-mail-label">Email</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<textarea type="text" className="input-message"></textarea>
						<label className="input-message-label">Message</label>
						<div className="line"></div>
					</div>
					<div className="contact-button-area">
						<button className="contact-save-button">Save</button>
					</div>
				</form>
				<div className="contact-links">
					<li className="contact-generic-container">
						<a href="mailto:blackznigelng@gmail.com">
							<img className="contact-img" src={Gmail}></img>
						</a>
					</li>
					<a href="https://www.linkedin.com/in/nigel-ng-ba1794197/">
						<li className="contact-generic-container">
							<img className="contact-img" src={Linkedin}></img>
						</li>
					</a>
					<a href="https://github.com/vanGoghhh?tab=repositories">
						<li className="contact-generic-container">
							<img className="contact-img" src={Github}></img>
						</li>
					</a>
				</div>
			</div>
		);
	}
}

export default Contact;
