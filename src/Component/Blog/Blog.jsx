import React, { useState } from 'react'
import Post from './Post'
  import {posts as initialPosts} from "./Data";
 
export default function Blog() {
  const [posts,setPosts]=useState(initialPosts);
  const [title,setTitle]=useState('');
  const [content,setcontent]=useState('')
  const handleAdd=()=>{
    if (!title || !content) return;
    const newPosts={
       id: Date.now(),
    title,
    content,
    comments:[]
    };
    setPosts([...posts,newPosts]);
    setTitle('');
    setcontent('');
   

  }
  return (
    <div>
      <h1>Blog</h1>
      <h3>Add new posts</h3>
      <input type="text" placeholder='Enter the title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <br />
      <textarea placeholder='Post content' value={content} onChange={(e)=>setcontent(e.target.value)}></textarea>
      <button onClick={()=>handleAdd()}>Add</button>
       <Post posts={posts} setPosts={setPosts}/>

    </div>
   
  )
}
