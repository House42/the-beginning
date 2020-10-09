import React from "react";
import './nav-bar.css';

class SlidingNav extends React.Component {
  render() {
    return (
      <nav id="navSlider" className="navbarSlider">
        <div className="navigatingTop">
          <h2 /><a className="hvr-overline-from-center" href="#">
            TOP
          </a>
        </div>
      <div className="scrollBar">
          <ul className="scrollLinks">
            <li>
                <a href="#blog1">2020</a>
            </li>
            <li>
                <a href="#blog2">Belly Blog</a>
            </li>
            <li>
                <a href="#blog3">Landscape</a>
            </li>
            <li>
               <a href="#4">Malta</a>
            </li>
            <li>
                <a href="#5">New Zealand</a>
            </li>
          </ul>
      </div>
        <div className="togg">
          <input type="checkbox" id="check" />
            <label id="toggleSlider" htmlFor="check">
                <div className="btn1" id="btn1">
                      <span />
                      <span />
                      <span />
                </div>
            </label>
              <ul className="menuSlider">
                  <li className="hvr-sweep-to-right">
                        <a className="link" href="../index.html">Home</a>
                  </li>
                  <li className="hvr-sweep-to-right">
                        <a className="link" href="#">Merch</a>
                  </li>
                  <li className="hvr-sweep-to-right">
                        <a className="link" href="about.html">About</a>
                  </li>
                  <li className="hvr-sweep-to-right">
                  <     a className="link" href="#">Contact</a>
                  </li>
              </ul>
        </div>
      </nav>
    );
  }
}

export default SlidingNav;
