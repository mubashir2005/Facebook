import React from 'react';
import "./StoryReel.css"
import Story from "./Story";

function StoryReel() {
    return (
        <div  className='storyReel'>

           <Story image='https://images.unsplash.com/photo-1477327070293-75f15e291bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc="https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4" title={"Mubashir Hasan"} />
           <Story image='https://cdn.dribbble.com/users/256257/screenshots/6521906/headerimagecolored3dribble.png' profileSrc={"https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"} title={"Steve Jobs"}  />
           <Story image='https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc={"https://www.gstatic.com/tv/thumb/persons/487130/487130_v9_ba.jpg"} title={"Elon Musk"} />
           <Story image='https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc={"https://avatars3.githubusercontent.com/u/66676375?s=460&u=28de97e7cb18bdfc49ba4174c67422a3462b2cf0&v=4"} title={"Madhav Anand"} />

        </div>
    )
}

export default StoryReel;
