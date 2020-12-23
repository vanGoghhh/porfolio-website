import React, { Component } from "react";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import db from "../../Firebase";
import "./Contact.css";

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = (e) => {
		e.preventDefault();
		db.collection("Contacts").add(
			{
				name: this.state.name,
				email: this.state.email,
				message: this.state.message,
			}
		)
		.then(() => {
			alert("Message has been submitted!");
		})
		.catch(error => {
			alert(error.message);
		});
	};
	render() {
		return (
			<div className="contact-container" id="contacts">
				<div className="contact-header">Contact</div>
				<div className="contact-friendly-msg">
					I'd love to connect with you!
				</div>
				<form className="contact-form" onSubmit={this.handleSubmit}>
					<div className="contact-input">
						<input
							type="text"
							className="input-name"
							onChange={(e) => this.setState({ name: e.target.value })}
						></input>
						<label className="input-name-label">Name</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<input
							type="text"
							className="input-mail"
							onChange={(e) => this.setState({ email: e.target.value })}
						></input>
						<label className="input-mail-label">Email</label>
						<div className="line"></div>
					</div>
					<div className="contact-input">
						<textarea
							type="text"
							className="input-message"
							onChange={(e) => this.setState({ message: e.target.value })}
						></textarea>
						<label className="input-message-label">Message</label>
						<div className="line"></div>
					</div>
					<div className="contact-button-area">
						<button className="contact-save-button" type="submit">Save</button>
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
