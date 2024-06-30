import React from "react";
import DashboardActiveIcon from "../../assets/icons/Dashboard-active.svg";
import ListActiveIcon from "../../assets/icons/Project-list-active.svg";
import CreateActiveIcon from "../../assets/icons/create-project-active.svg";
import HorizontalLineIcon from "../../assets/icons/horizontal-line.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="vertical-navbar">
      <div className="nav-main">
        <div className="nav-dashboard-icon">
          <img src={DashboardActiveIcon} alt="Dashboard-active icon" />
        </div>
        <div className="nav-list-icon">
          <img src={ListActiveIcon} alt="List-active icon" />
        </div>
        <div className="horizontal-line">
          <img src={HorizontalLineIcon} alt="horizonatal line Icon" />
        </div>
        <div className="nav-create-icon">
          <img src={CreateActiveIcon} alt="create Icon" />
        </div>
      </div>
      <div className="nav-logout-icon">
        <img src={LogoutIcon} alt="logout icon" />
      </div>
    </div>
  );
};

export default Navbar;
