import React from "react";

function InfoPlate(props) {
  return (
    <div className="info-main">
      <div className="info-container">
        <img src={props.image} alt="" />
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <a href="">Learn More</a>
      </div>
    </div>
  );
}

export default InfoPlate;
