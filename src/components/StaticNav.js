import React from "react";
import './nav-bar.css';

class StaticNav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <input type="checkbox" id="check" />
          <label id="toggle" htmlFor="check">
              <div className="btn1" id="btn1">
                    <span />
                    <span />
                    <span />
              </div>
          </label>
            <ul className="menu">
                <li>
                    <a className="link" href="../index.html">Home</a>
                </li>
                <li>
                    <a className="link" href="#">Merch</a>
                </li>
                <li>
                    <a className="link" href="about.html">About</a>
                </li>
                <li>
                    <a className="link" href="#">Contact</a>
                </li>
            </ul>
      </nav>
    );
  }
}

export default StaticNav;
