import React from 'react';
import CSS from './BuildControl.css';

const buildControl = (props) => (
  <div className={CSS.BuildCOntrol}>
    <div className={CSS.Label}>{props.label}</div>
    <button className={CSS.Less}>Less</button>
    <button className={CSS.More}>More</button>
  </div>
);

export default buildControl;