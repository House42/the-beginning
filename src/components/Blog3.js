import React from "react";

class Blog3 extends React.Component {
  render() {
    return (
      <div className="blog" id="blog3">
        <div className="grid-gallery">
          <div className="grid-item grid-text blog-head">
            <div className="titleBlog">
              <h2>Landscape</h2>
            </div>
          </div>
          <div className="grid-item small1-2">
            <img data-src="../images/colorbeach.jpg" />{" "}
          </div>
          <div className="grid-item med2-2">
            <img data-src="../images/night.jpg" />
          </div>
          <div className="grid-item landscape4-2">
            <img data-src="../images/beach.jpg" />
          </div>
          <div className="grid-item landscape5-2">
            <img data-src="../images/road.jpg" />
          </div>
          <div className="grid-item large6-2">
            <img data-src="../images/lakes.jpg" />
          </div>
          <div className="grid-item large7-2">
            <img data-src="../images/pinklake.jpg" />
          </div>
          <div className="grid-item med8-2">
            <img data-src="../images/river.jpg" />
          </div>
          <div className="grid-item landscape9-2">
            <img data-src="../images/lavender.jpg" />
          </div>
          <div className="grid-item landscape10-2">
            <img data-src="../images/rivers.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog3;
