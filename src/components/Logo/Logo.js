import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import CSS from './Logo.css';

const logo = (props) => (
  <div className={CSS.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
