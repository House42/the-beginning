import React from "react";
import './BlogStyles.css';
import './BlogStart.css'
import Covid from '../images/2020/covid.jpg';
import Udemy from '../images/2020/udemy.png';
import blm2 from '../images/2020/blm2.png';
import blm1 from '../images/2020/blm1.png';
import Trump from '../images/2020/trump.jpg';
import Ufc from '../images/2020/ufc.jpeg';

class BlogStart extends React.Component {
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
            <img src= {Covid} alt="Covid" />
          </div>
          <div className="grid-item med1-0">
            <img src={Udemy} alt="Udemy" />
          </div>
          <div className="grid-item med2-0">
            <img src={blm2} alt="blm2"/>
          </div>
          <div className="grid-item long3-0">
            <img src={Trump} alt="trump"/>
          </div>
          <div className="grid-item large4-0">
            <img src={blm1} alt="blm1"/>
          </div>
          <div className="grid-item med5-0">
            <img src={Ufc} alt="ufc"/>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogStart;
