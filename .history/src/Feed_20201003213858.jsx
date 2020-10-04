import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useState } from 'react';

function Feed() {
    const[posts, setPosts] = useState([]);

   useEffe  useEffect(() => {
     db.collection('posts').onSnapshot(snapshot =>{
         setPosts(snapshot.docs.map(doc => ({id: doc.id , data: doc.data})));
     })
    },[])
    return (
        <div className="Feed">

           <StoryReel/>
           <MessageSender />
           {posts.map(post => (
               <Post 
                 key={post.id}
                 profilePic={post.profilePic}
                 message={post.message}
                 userName={post.userName}
                 image= {post.image}
                 timestamp= {post.timestamp}
               />
           ))}


        </div>
    );
}

export default Feed;
