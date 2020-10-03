import React from 'react';
import "./Widgets.css";

function Widgets() {
    return (
        <div className='widgets'>
            <iframe
                src="https://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fwfuvpage&amp;width=340&amp;height=1500&amp;colorscheme=light&amp;show_faces=true&amp;border_color&amp;stream=true&amp;header=true"
                style={{border: 'none',overflow: 'hidden'}}
                scrolling="no" frameBorder="0"
                width="340"
                height="100%"
                allowTransparency="true"></iframe>
        </div>
    );
}
export default Widgets;
