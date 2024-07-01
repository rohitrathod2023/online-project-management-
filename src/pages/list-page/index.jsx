import React from "react";
import "./list-page.css";
import Navbar from "../../common/components/navbar";
import ListMain from "./components/list-main";

const List = () => {
  return (
    <div className="list-page">
      <Navbar />
      <div className="list-page-container">
        <ListMain />
      </div>
    </div>
  );
};

export default List;
