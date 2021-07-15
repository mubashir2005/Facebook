import React from 'react';
import "./Story.css";
import {Avatar} from "@material-ui/core";

function Story({ image, profileSrc, title}) {
    return (
        <div>
            <div style={{ backgroundImage: `url(${image})`}}   className="story">

                <Avatar  className={"story__avatar"} src={profileSrc}/>
                <h4 className={'small'}>{title}</h4>
            </div>
            <div className="story_small">
                <Avatar  src={profileSrc} rounded/>
            </div>
        </div>

    );
}
export default Story;
