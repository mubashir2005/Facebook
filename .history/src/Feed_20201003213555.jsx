import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";
import { useState } from 'react';

function Feed() {
    const[posts, setPosts] = useState([]);

    useEffect(() => {
     db.collection('posts').onSnapshot(snapshot =>{
         setPosts(snapshot.docs.map(doc => ({id: doc.id , data: doc.data})));
     })
    },[])
    return (
        <div className="Feed">

           <StoryReel/>
           <MessageSender />
           {posts.map(post => (
               <Post />
           ))}


        </div>
    );
}

export default Feed;
