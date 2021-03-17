import React from 'react';
import classes from './App.css';
import Header from './Components/Header/Header';
import Profile from "./Components/MyProfile/Profile";
import NavBar from "./Components/Navbar/NavBar";
import Messages from "./Components/Messages/Messages";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import Posts from "./Components/Posts/Posts";
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <NavBar/>
        <div className={classes.content}>
          <Route path='./profile' component={Profile}/>
          <Route path='./messages' component={Messages}/>
          <Route path='./news' component={News}/>
          <Route path='./music' component={Music}/>
          <Route path='./settings' component={Settings}/>
          <Route path='./posts' component={Posts}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
