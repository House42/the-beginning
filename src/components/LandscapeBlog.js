import React from "react";
import './BlogStyles.css';
import './LandscapeBlog.css';
import ColorBeach from "../images/colorbeach.jpg";
import Night from "../images/night.jpg";
import Beach from "../images/beach.jpg";
import Road from "../images/road.jpg";
import Lakes from "../images/lakes.jpg";
import PinkLake from "../images/pinklake.jpg";
import River from "../images/river.jpg";
import Lavender from "../images/lavender.jpg";
import Rivers from "../images/rivers.jpg";


class LandscapeBlog extends React.Component {
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
            <img src={ColorBeach} alt='ColorBeach' />
          </div>
          <div className="grid-item med2-2">
            <img src={Night} alt='Night' />
          </div>
          <div className="grid-item landscape4-2">
            <img src={Beach} alt='Beach' />
          </div>
          <div className="grid-item landscape5-2">
            <img src={Road} alt='Road' />
          </div>
          <div className="grid-item large6-2">
            <img src={Lakes} alt='Lakes' />
          </div>
          <div className="grid-item large7-2">
            <img src={PinkLake} alt='PinkLake' />
          </div>
          <div className="grid-item med8-2">
            <img src={River} alt='River' />
          </div>
          <div className="grid-item landscape9-2">
            <img src={Lavender} alt='Lavender' />
          </div>
          <div className="grid-item landscape10-2">
            <img src={Rivers} alt='Rivers' />
          </div>
        </div>
      </div>
    );
  }
}

export default LandscapeBlog;
