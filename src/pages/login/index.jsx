import React from "react";
import LogoIcon from "../../common/assets/icons/Logo.svg";
import LoginMain from "./components/login-main";
import "./login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="logo-icon">
          <img src={LogoIcon} alt="logo-icon" className="logo-icon" />
        </div>
        <div className="comapny-name">
          <span className="company-name-text">Online Project Management</span>
        </div>
        <div className="login-main">
          <LoginMain />
        </div>
      </div>
    </div>
  );
};

export default Login;
