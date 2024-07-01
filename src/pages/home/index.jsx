import React from "react";
import "./home.css";
import Navbar from "../../common/components/navbar";
import Card from "./components/card";
import GraphReport from "./components/graph-report/index.jsx";

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="home-page-container">
        <Card />
        <GraphReport />
      </div>
    </div>
  );
};

export default Home;
