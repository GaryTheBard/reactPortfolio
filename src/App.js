import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import "./css/style.css";
import Header from "./Header";
import HomePage from "./Home";
import AboutPage from "./About";
import MusicPage from "./Music";

const App = () => (
  <Router>
    <Header
      brand=""
      links={[
        { label: "Home", path: "/" },
        { label: "Skills", links: [{ label: "Music", path:"/music"},{label:"2D-Art",path:"/2d-art"}] },
        { label: "About", path: "/about" },
      ]}
    />
    {/* <Header
      brand="Ringo The Bard Portfolio"
      links={[
        { label: "Home", path: "/" },
        { label: "Skills", links: [{ label: "Music", path:"/music"},{label:"2D-Art",path:"/2d-art"}] },
        { label: "About", path: "/about" },
      ]}
    /> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/About" element={<AboutPage />} />
      <Route path="/Music" element={<MusicPage />}/>
    </Routes>
  </Router>
);

export default App;
