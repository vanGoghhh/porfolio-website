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
				<div className="contact-friendly-msg">I'd love to connect with you!</div>
				<form className="contact-form">
					<div className="contact-input">
						<input type="text" name="name"></input>
						<label>Name</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<input type="text" name="email"></input>
						<label>Email</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<textarea type="text" name="message"></textarea>
						<label>Message</label>
						<div className="line"></div>
					</div>
				</form>
			</div>
		);
	}
}

export default Contact;
