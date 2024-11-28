import React, { useState } from "react";
import "./login-main.css";
import HidePassword from "../../../../common/assets/icons/hide-password";
import { useNavigate } from "react-router-dom"; 

const LoginMain = () => {
  const [show, setShow] = useState(false);
  const [coustomwidth, setCoustomWidth] = useState(24.8);
  const navigate = useNavigate();
  
  // State to manage email, password, and login status
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(""); // For displaying error messages
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication status
  
  const hardcodedEmail = "abc@gmail.com"; // Example hardcoded email
  const hardcodedPassword = "password123"; // Example hardcoded password

  const togglePasswordVisibility = () => {
    setShow(!show);
    setCoustomWidth(coustomwidth === 24.8 ? 0 : 24.8);
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form default submission

    // Check if the entered email and password match the hardcoded ones
    if (email === hardcodedEmail && password === hardcodedPassword) {
      setIsAuthenticated(true);
      setLoginError(""); // Clear any previous errors
      navigate("/home");
    } else {
      setIsAuthenticated(false);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-main">
      <div className="login-form-container">
        <div className="login-form-text">
          <span className="text-highlight">Login to get started</span>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email" className="form-label-text">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Set email state
            required
            className="form-control"
          />
          <label htmlFor="password" className="form-label-text">
            Password
          </label>
          <input
            type={show ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Set password state
            required
            className="form-control"
          />
          <div className="hide-password-container">
            <HidePassword width={coustomwidth} onClick={togglePasswordVisibility} />
          </div>
          
          {/* Display error message if authentication fails */}
          {loginError && <div className="login-error">{loginError}</div>}
          
          <div>
            <a href="#/" className="forgot-link">
              Forgot Password?
            </a>
          </div>
          <div className="login-btn">
            <button type="submit" className="main-login-btn">
              Login
            </button>
          </div>
        </form>

        {/* If the user is authenticated, show a success message */}
        {isAuthenticated && <div className="login-success">Login successful!</div>}
      </div>
    </div>
  );
};

export default LoginMain;
