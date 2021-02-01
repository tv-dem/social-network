import React from 'react'
import classes from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
  return(
    <div className={classes.content}>
      <img src="https://i.uaportal.com/2020/2/1/screenshot4.png" alt=""/>
      <div className={classes.contentWrapper}>
        <div>photo + description</div>
        <Posts/>
      </div>
    </div>
  )
}

export default Profile;
