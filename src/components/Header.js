import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"  alt="Instagram logo" />
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="auth-buttons">
        <button className="login-button">Log In</button>
        <button className="signup-button">Sign Up</button>
      </div>
    </div>
  );
}

export default Header;
