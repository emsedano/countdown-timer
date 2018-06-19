import React from 'react'
import './timebox.component.css';

export const TimeBox = ({value, title}) => {
  return (
    <div className="timebox">
      <p className="box-value">{value}</p>
      <p className="box-title">{title}</p>
    </div>
  );
}