import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className="greeting-container">
      <Link to="/login">Login</Link>
      &nbsp;or&nbsp;
      <Link to="/signup">Sign Up!</Link>
    </nav>
  );

  const personalGreeting = () => (
    <div className="greeting-container">
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;