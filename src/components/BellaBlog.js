import React from "react";
import './BlogStyles.css';
import './BellaBlog.css'
import Beach from '../images/bella/beachbella.jpg';
import Sleepy from '../images/bella/sleepbella.jpg';
import Shoe from '../images/bella/shoe.jpeg';
import Gym from '../images/bella/gym.jpeg';
import Socks from '../images/bella/socksbella.jpg';
import Toy from '../images/bella/bellytoy.jpg';
import Bag from '../images/bella/bag.jpeg';
import NoWalk from '../images/bella/nowalkbella.jpg';
import Dressed from '../images/bella/dressedbella.jpg';
import Pose from '../images/bella/pose2bella.jpg';

class BellaBlog extends React.Component {
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
                <img src={Beach} alt='Beach' />
              </div>
              <div className="grid-item small2">
                <img src={Sleepy} alt='Sleepy' />
              </div>
              <div className="grid-item small3">
                <img src={Shoe} alt='Shoe' />
              </div>
              <div className="grid-item landscape4">
                <img src={Gym} alt='Gym' />
              </div>
              <div className="grid-item med5">
                <img src={Socks} alt='Socks' />
              </div>
              <div className="grid-item med6">
                <img src={Toy} alt='Toy' />
              </div>
              <div className="grid-item small7">
                <img src={Bag} alt='Bag' />
              </div>
              <div className="grid-item large8">
                <img src={NoWalk} alt='NoWalk' />
              </div>
              <div className="grid-item med9">
                <img src={Dressed} alt='Dressed' />
              </div>
              <div className="grid-item portrait10">
                <img src={Pose} alt='Pose' />
              </div>
        </div>
      </div>
    );
  }
}

export default BellaBlog;
