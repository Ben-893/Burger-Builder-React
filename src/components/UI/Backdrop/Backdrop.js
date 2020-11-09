import React from 'react';

import CSS from './Backdrop.css';

const Backdrop = props =>
  props.show ? (
    <div className={CSS.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default Backdrop;
