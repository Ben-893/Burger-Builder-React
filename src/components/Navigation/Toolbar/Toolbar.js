import React from "react";

import CSS from './Toolbar.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
  <header className={CSS.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      ...
    </nav>
  </header>
);

export default toolbar;
