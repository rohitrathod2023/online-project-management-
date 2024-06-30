import React from "react";
import "./home.css";
import Navbar from "../../common/components/navbar";
import LogoIcon from "../../common/assets/icons/Logo.svg";
import Card from "./components/card";
import GraphReport from "./components/graph-report/index.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page-headline">
        <h1 className="home-page-headline-text">Dashboard</h1>
      </div>
      <div className="logo-icon-home">
        <img src={LogoIcon} alt="Logo icon" />
      </div>
      <Card />
      <GraphReport />
    </div>
  );
};

export default Home;
