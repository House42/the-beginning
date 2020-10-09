import React from "react";
import './BlogStyles.css';
import './Blogtemplate1.css'
import from '';
import from '';
import from '';
import from '';
import from '';
import from '';


class Blog extends React.Component {
  render() {
    return (
      <div className="blog" id="blog1">
        <div className="grid-gallery">
          <div className="grid-item grid-text blog-head">
            <div className="titleBlog">
              <h2>Blog</h2>
            </div>
              </div>
                <div className="grid-item large0-0">
                  <img src= {} alt="" />
                </div>
                <div className="grid-item med1-0">
                  <img src={} alt="" />
                </div>
                <div className="grid-item med2-0">
                  <img src={} alt=""/>
                </div>
                <div className="grid-item long3-0">
                  <img src={} alt=""/>
                </div>
                <div className="grid-item large4-0">
                  <img src={} alt=""/>
                </div>
                <div className="grid-item med5-0">
                  <img src={} alt=""/>
                </div>
        </div>
      </div>
    );
  }
}

export default Blog;
