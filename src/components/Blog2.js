import React from "react";

class Blog2 extends React.Component {
  render() {
    return (
      <div className="blog" id="blog2">
        <div className="grid-gallery">
          <div className="grid-item grid-text blog-head">
            <div className="titleBlog">
              <h2>Belly Blog</h2>
            </div>
          </div>
          <div className="grid-item large1">
            <img data-src="../images/bella/beachbella.jpg" />{" "}
          </div>
          <div className="grid-item small2">
            <img data-src="../images/bella/sleepbella.jpg" />
          </div>
          <div className="grid-item small3">
            <img data-src="../images/bella/shoe.jpeg" />
          </div>
          <div className="grid-item landscape4">
            <img data-src="../images/bella/gym.jpeg" />
          </div>
          <div className="grid-item med5">
            <img data-src="../images/bella/socksbella.jpg" />
          </div>
          <div className="grid-item med6">
            <img data-src="../images/bella/bellytoy.jpg" />
          </div>
          <div className="grid-item small7">
            <img data-src="../images/bella/bag.jpeg" />
          </div>
          <div className="grid-item large8">
            <img data-src="../images/bella/nowalkbella.jpg" />
          </div>
          <div className="grid-item med9">
            <img data-src="../images/bella/dressedbella.jpg" />
          </div>
          <div className="grid-item portrait10">
            <img data-src="../images/bella/pose2bella.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog2;
