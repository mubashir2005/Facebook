import React, { useEffect } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useState } from 'react';

function Feed() {
    const [posts, setPosts] = useState([]);

  useEffect(() => {
      db.collection("posts").orderBy()onSnapshot((snapshot) => 
      setPosts(snapshot.docs.map((doc) => ({id : doc.id, data: doc.data() })))
      );
  }, []);

  
         
    return (
        <div className="Feed">

           <StoryReel/>
           <MessageSender />
           {posts.map((post) => (
               <Post 
                 key= {post.id}
                 profilePic= {post.data.profilePic}
                 image= {post.data.image}
                 userName= {post.data.userName}
                 timestamp= {post.data.timestamp}
                 message= {post.data.message}
               />
               
           
           
           ))}


        </div>
    );
}

export default Feed;
