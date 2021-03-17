import React from 'react';
import classes from './Post.module.css'

const Post = ({message}) => {
  return(
    <div className={classes.post}>
      <img className={classes.post__avatar} src="https://i.pinimg.com/736x/a1/fe/41/a1fe4113202420b5213bf85f3f5d8748.jpg" alt=""/>
      <span>{message}</span>
    </div>
  )
}

export default Post;
