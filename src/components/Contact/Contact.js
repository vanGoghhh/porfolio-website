import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	render() {
		return (
			<div className="contact-container">
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
					<div className="contact-generic-container">
						<img className="contact-email-img"></img>
						<h1>Email Me At</h1>
						<p>blackznigelng@gmail.com</p>
					</div>
					<div className="contact-generic-container">
						<img className="contact-linkedin-img"></img>
						<h1>Connect with me on linkedin</h1>
						<a>Linkedin Profile</a>
					</div>
					<div className="contact-generic-container">
						<img className="contact-phone-img"></img>
						<h1>Phone me at</h1>
						<h2>+65 82827731</h2>
					</div>
					<div className="contact-generic-container">
						<img className="contact-github-img"></img>
						<h1>Find me on github</h1>
						<a>Github Profile</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
