import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import {AccountCircle, ChatBubble, ExpandMore, ExpandMoreOutlined, NearMe, ThumbUp} from "@material-ui/icons";
import {useStateValue} from "./StateProvider";


function Post({profilePic, image, userName,timestamp,message}) {
    
    const [{ user },dispatch]= useStateValue();

    return (
        <div className="post">
          <div className="post__top">
              <Avatar src={user.photoURL} className={"post__avatar"}/>
              <div className="post__topInfo">
                  <h3>{user.displayName}</h3>
                  <p>{timestamp}...</p>

              </div>
          </div>
            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubble/>
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="post__option">
                     <AccountCircle/>
                     <ExpandMoreOutlined/>
                </div>
            </div>
        </div>

    );
}
export default Post;
