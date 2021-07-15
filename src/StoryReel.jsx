import React from 'react';
import "./StoryReel.css"
import Story from "./Story";

function StoryReel() {
    return (
        <div  className='storyReel'>

           <Story image='https://www.ibm.com/quantum-computing/_nuxt/img/8e98570.png' profileSrc="https://avatars3.githubusercontent.com/u/60180419?s=460&u=5135c6af08fc8ae159e854882cd816efa82c7da5&v=4" title={"Mubashir Hasan"} />
           <Story image='https://images.unsplash.com/photo-1626275036283-40a59a0f3250?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' profileSrc={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbu034VkDt51FAGrfSlpS7FQBtfHYif2WQBCv7KlrXDCmYY6sXrjF0kh1z0V7wLkPeWs4&usqp=CAU"} title={"Jeff Bezos"}  />
           <Story image='https://images.unsplash.com/photo-1477327070293-75f15e291bb0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60' profileSrc={"https://upload.wikimedia.org/wikipedia/commons/d/dc/Steve_Jobs_Headshot_2010-CROP_%28cropped_2%29.jpg"} title={"Steve Jobs"} />
           <Story image='https://images.unsplash.com/photo-1593642531955-b62e17bdaa9c?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60' profileSrc={"https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"} title={"Mark Zuckerberg"} />

        </div>
    )
}

export default StoryReel;
