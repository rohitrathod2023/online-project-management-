import React from "react";
import DashboardActiveIcon from "../../assets/icons/Dashboard-active.svg";
import ListActiveIcon from "../../assets/icons/Project-list-active.svg";
import CreateActiveIcon from "../../assets/icons/create-project-active.svg";
import HorizontalLineIcon from "../../assets/icons/horizontal-line.svg";
import LogoutIcon from "../../assets/icons/Logout.svg";
import LogoIcon from "../../assets/icons/Logo.svg";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import VerticalNavbar from "./components/vertical-navbar";
const Navbar = () => {
  const navigate = useNavigate();
  const goToHomePage = () => {
    navigate("/home");
  };
  const goToListPage = () => {
    navigate("/list");
  };
  const goToCreatePage = () => {
    navigate("/create");
  };
  return (
    <div className="navbar-page">
      <div className="horizoantal-navbar-container">
        <div className="page-headline">
          <h1 className="page-headline-text">Dashboard</h1>
        </div>
        <div className="navbar-logo-icon">
          <img src={LogoIcon} alt="Logo icon" />
        </div>
      </div>
      <div className="vertical-navbar">
        <div className="nav-main">
          <div className="nav-dashboard-icon" onClick={goToHomePage}>
            <img src={DashboardActiveIcon} alt="Dashboard-active icon" />
          </div>
          <div className="nav-list-icon" onClick={goToListPage}>
            <img src={ListActiveIcon} alt="List-active icon" />
          </div>
          <div className="horizontal-line">
            <img src={HorizontalLineIcon} alt="horizonatal line Icon" />
          </div>
          <div className="nav-create-icon" onClick={goToCreatePage}>
            <img src={CreateActiveIcon} alt="create Icon" />
          </div>
        </div>
        <div className="nav-logout-icon">
          <img src={LogoutIcon} alt="logout icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
