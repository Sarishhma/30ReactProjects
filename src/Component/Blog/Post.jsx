import React, { useState } from "react";
import BlogComment from "./BlogComment";
import { comment } from "postcss";

export default function Post({ posts,setPosts }) {
  const [commentText,setcommentText]= useState({});

  const AddComments =(postId)=>{
if(!commentText[postId])
  return;

setPosts(
  posts.map((post)=>
    post.id === postId ?
    {
      ...post,comments:[...post.comments,{
        id: Date.now(),
        text: commentText[postId],
      }]
    }:post,
  ))
setcommentText({...commentText,[postId]:''})
  }
  const DeleteComments = (postId, commentId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : post
      )
    );
  };
  return (
    
    <div>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>

          <h4>Comments:</h4>
          {(post.comments || []).map((comment) => (
            <div>
              <BlogComment key={comment.id} comment={comment} />
              <button onClick={()=>DeleteComments(post.id,comment.id)}>Delete</button>
            </div>
            
          ))}
          
          <input type="text" placeholder="enter the comment" value={commentText[post.id] || ""} onChange={(e)=>setcommentText({...commentText,[post.id]:e.target.value})}/>
          <button onClick={()=>AddComments(post.id)}>Add a comment</button>
         
        </div>
      ))}
    </div>
  );
}
