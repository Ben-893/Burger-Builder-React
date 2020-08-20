import React from 'react';

import CSS from './Modal.css'

const modal = (props) => (
  <div 
    className={CSS.Modal}
    style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1' : '0'
      }}>
    {props.children}
  </div>
);

export default modal;