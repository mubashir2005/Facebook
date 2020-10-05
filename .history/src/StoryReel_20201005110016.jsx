import React from 'react';
import "./StoryReel.css"
import Story from "./Story";

function StoryReel() {
    return (
        <div  className='storyReel'>

           <Story image='https://images.unsplash.com/photo-1477327070293-75f15e291bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc="https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4" title={"Mubashir Hasan"} />
           <Story image='https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc={"https://avatars3.githubusercontent.com/u/66676375?s=460&u=28de97e7cb18bdfc49ba4174c67422a3462b2cf0&v=4"} title={"Madhav Anand"} />
           <Story image='https://cdn.dribbble.com/users/256257/screenshots/6521906/headerimagecolored3dribble.png' profileSrc={"https://avatars1.githubusercontent.com/u/8461930?s=460&v=4"} title={"Rafeh Qazi"}  />
           <Story image='https://images.unsplash.com/photo-1600964373031-f0b65565f354?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc={"https://avatars2.githubusercontent.com/u/24712956?s=460&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"} title={"Elon"} />

        </div>
    )
}

export default StoryReel;
