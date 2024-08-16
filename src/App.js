import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header.js";
import Home from "./components/Home/Home.js";
import Couple from "./components/Couple/Couple.js";
import People from "./components/People/People.js";
import Events from "./components/Events/Events.js";
import Gallery from "./components/Gallery/Gallery.js";
import FooterPage from "./components/FooterPage/FooterPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Couple />
      <People />
      <Events />
      <Gallery />
      <FooterPage />
    </div>
  );
}

export default App;
