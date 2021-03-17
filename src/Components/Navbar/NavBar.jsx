import React from 'react';
import classes from './NavBar.module.css'
import {NavLink} from "react-router-dom";
const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <ul>
        <li><NavLink activeClassName={classes.active} to="./profile">Profile</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="./messages">Messages</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="./news">News</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="./posts">Posts</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="./music">Music</NavLink></li>
        <li><NavLink activeClassName={classes.active} to="./settings">Settings</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBar;
