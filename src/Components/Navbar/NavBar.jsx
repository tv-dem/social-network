import React from 'react';
import classes from './NavBar.module.css'
const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <ul>
        <li><a href="./profile">Profile</a></li>
        <li><a href="./messages">Messages</a></li>
        <li><a href="./news">News</a></li>
        <li><a href="./posts">Posts</a></li>
        <li><a href="./music">Music</a></li>
        <li><a href="./settings">Settings</a></li>
      </ul>
    </nav>
  )
}

export default NavBar;
