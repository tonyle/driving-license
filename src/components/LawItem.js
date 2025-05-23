import React from 'react';

const LawItem = ({ title, content }) => (
  <div className="section">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

export default LawItem;
