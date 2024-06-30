import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card-containers">
      <div className="card-container">
        <div className="card-container-text">
          <span className="title-text">Total Projects</span>
          <h1 className="count-text">8</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-text">
          <span className="title-text">Closed</span>
          <h1 className="count-text">2</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-text">
          <span className="title-text">Running</span>
          <h1 className="count-text">3</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-text">
          <span className="title-text">Closure Daley</span>
          <h1 className="count-text">2</h1>
        </div>
      </div>
      <div className="card-container">
        <div className="card-container-text">
          <span className="title-text">Cancelled</span>
          <h1 className="count-text">3</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
