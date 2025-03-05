import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import sendMessage from "./services/sendMessage";
import "./App.css";

function App() {
  const handleTestSend = async () => {
    try {
      await  sendMessage("user_123", "Hello, Firestore!");
      alert(" Message sent successfully ! ");
    } catch (error) {
      console.error("Failed to send message:", error);
      alert( "Error sending message ");
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <button onClick = {handleTestSend}>Test Send Message</button> { /* test button */ }

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
