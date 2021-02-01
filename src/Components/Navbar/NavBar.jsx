import React from 'react';
import classes from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <ul>
        <li>Profile</li>
        <li>Messages</li>
        <li>News</li>
        <li>Posts</li>
        <li>Music</li>
        <li>Settings</li>
      </ul>
    </nav>
  )
}

export default NavBar;
