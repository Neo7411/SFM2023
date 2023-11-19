import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import Home from "./Home"
import Delivery from "./Delivery";
import reportWebVitals from './reportWebVitals';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [screen, setScreen] = useState("login") //login, home, delivery
  const [loggedInUsername, setLoggedInUsername] = useState("");

  const handleLogin = (bool, username) => {
    if (bool) {
      setScreen("home")
    }
    setLoggedInUsername(username)
  }

  return (
    <div>
      {screen == "login" && <Login onLogin={handleLogin} />}
      {screen == "home" && <Home />}
      {screen == "delivery" && <Delivery />}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
