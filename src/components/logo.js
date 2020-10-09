import React, { Component } from "react";
import './Logo.css';

class logo extends Component {
  render() {
    return (
      <div>
        <div className="logoSlider">
          <img id="logoHidden" src="../images/logo/1logo.png" alt='Logo' />
        </div>
        <div className="logo">
          <img src="../images/logo/7logo.png" alt='Logo'/>
        </div>
      </div>
    );
  }
}

export default logo;
