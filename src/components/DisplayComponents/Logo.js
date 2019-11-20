import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img style={{paddingTop: '5px', paddingLeft: '20px'}}className="logo" src={logo} alt="Lambda's logo" />
    </div>
  );
};

export default Logo;
