import React from 'react';
import Post from "./Post/Post";
import classes from './Posts.module.css'
const Posts = () => {
  return (
    <div>
      <h1 className={classes.posts__title}>my posts</h1>
      <form className={classes.formNewPost}>
        <textarea className={classes.formNewPost__textarea}/>
        <button className={classes.formNewPost__btn} type={'submit'}>SUBMIT</button>
      </form>
      <div>new post</div>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default Posts;
