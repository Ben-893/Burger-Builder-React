import React from 'react';

import CSS from './DrawerToggle.css';

const DrawerToggle = props => (
  <div className={CSS.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DrawerToggle;
