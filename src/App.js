import React, {Component} from 'react';
import MainPage from '../src/components/MainPage';
import AboutMe from '../src/components/AboutMe';
import Portfolio from '../src/components/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <AboutMe/>
      <Portfolio/>
    </div>
  );
}

export default App;
