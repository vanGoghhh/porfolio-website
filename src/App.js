import React, { Component } from "react";
import MainPage from "../src/components/MainPage";
import AboutMe from "../src/components/AboutMe";
import Portfolio from "../src/components/Portfolio";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import "./App.css";

function App() {
	return (
		<div className="App">
			<MainPage />
			<AboutMe />
			<Portfolio />
			<Projects />
			<Contact />
		</div>
	);
}

export default App;
