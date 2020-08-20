import React from 'react';

import CSS from './Modal.css'

const modal = (props) => (
  <div className={CSS.Modal}>
    {props.children}
  </div>
);

export default modal;