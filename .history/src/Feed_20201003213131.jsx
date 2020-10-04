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
         setPosts.docs
     })
    },[])
    return (
        <div className="Feed">

           <StoryReel/>
           <MessageSender />
           <Post
               profilePic={'https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4'}
               message={'Wow This works!'}
               timestamp={'This is a timestamp'}
               userName={'Mub45191'}
               image={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQYFYUMxwjoJUgk-Bv9mwUGhi6uhAIKOfWZHw&usqp=CAU'}
           />
           <Post
               profilePic={'https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4'}
               message={'Wow This works!'}
               userName={'Mub45191'}
               timestamp={'This is a timestamp'}
           />



        </div>
    );
}

export default Feed;
