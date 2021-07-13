import React from "react";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fwired%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        style={{ border: "none", overflow: "hidden", marginRight: "10px" }}
        scrolling="no"
        frameBorder="0"
        width="340"
        height="100%"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="WIRED"
      ></iframe>
    </div>
  );
}
export default Widgets;
