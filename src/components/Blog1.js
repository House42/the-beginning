import React from "react";

class Blog1 extends React.Component {
  render() {
    return (
      <div className="blog" id="blog1">
        <div className="grid-gallery">
          <div className="grid-item grid-text blog-head">
            <div className="titleBlog">
              <h2>2020</h2>
            </div>
          </div>
          <div className="grid-item large0-0">
            <img data-src="../images/2020/covid.jpg" />{" "}
          </div>
          <div className="grid-item med1-0">
            <img data-src="../images/2020/udemy.png" />
          </div>
          <div className="grid-item med2-0">
            <img data-src="../images//2020/blm2.png" />
          </div>
          <div className="grid-item long3-0">
            <img data-src="../images//2020/trump.jpg" />
          </div>
          <div className="grid-item large4-0">
            <img data-src="../images//2020/blm1.png" />
          </div>
          <div className="grid-item med5-0">
            <img data-src="../images//2020/ufc.jpeg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Blog1;
