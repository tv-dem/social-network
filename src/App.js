import React from 'react';
import './App.css'
import Header from './Components/Header/Header';
import Profile from "./Components/MyProfile/Profile";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <NavBar/>
      <Profile/>
    </div>
  );
}

export default App;
