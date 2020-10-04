import React from 'react';
import "./Post.css";
import {Avatar} from "@material-ui/core";
import {AccountCircle, ChatBubble, ExpandMore, ExpandMoreOutlined, NearMe, ThumbUp} from "@material-ui/icons";

function Post({profilePic, image, userName,timestamp,message}) {
    return (
        <div className="post">
          <div className="post__top">
              <Avatar src={profilePic} className={"post__avatar"}/>
              <div className="post__topInfo">
                  <h3>{userName}</h3>
                  <p>new Date(timestamp?.toDate)</p>

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
