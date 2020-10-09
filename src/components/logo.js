import React from "react";

class logo extends React.Component {
  render() {
    return (
      <div>
        <div className="logoSlider">
          <img id="logoHidden" src="../images/logo/1logo.png" />
        </div>
        <div className="logo">
          <img src="../images/logo/7logo.png" />
        </div>
      </div>
    );
  }
}

export default logo;
