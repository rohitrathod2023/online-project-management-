import React from "react";
import { useState } from "react";
import "./login-main.css";
// import HidePasswordIcon from "../../../../common/assets/icons/hide-password.svg";
import HidePassword from "../../../../common/assets/icons/hide-password";
const LoginMain = () => {
  const [show, setShow] = useState(false);
  const [coustomwidth, setCoustomWidth] = useState(24.8);
  const togglePasswordVisibility = () => {
    setShow(!show);
    setCoustomWidth(coustomwidth == "24.8" ? "0" : "24.8");
  };
  return (
    <div className="login-main">
      <div className="login-form-container">
        <div className="login-form-text">
          <span className="text-highlight">Login to get started</span>
        </div>

        <div className="login-form">
          <label htmlFor="email" className="form-label-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder=""
            required
            className="form-control"
          />
          <label htmlFor="password" className="form-label-text">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            placeholder=""
            required
            className="form-control"
          />
          <div className="hide-password-container">
            {/* <img
              src={HidePasswordIcon}
              alt="hide password icon"
              className="hide-password-icon"
            /> */}
            <HidePassword
              width={coustomwidth}
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>

        <div>
          <a href="#/" className="forgot-link">
            Forgot Password?
          </a>
        </div>
        <div className="login-btn">
          <button className="main-login-btn">Login </button>
        </div>
      </div>
    </div>
  );
};

export default LoginMain;
