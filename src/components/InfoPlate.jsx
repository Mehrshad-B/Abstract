import React from "react";

function InfoPlate(props) {
  return (
    <div className="info-container">
      <img src={props.image} alt="" />
      <div className="info-text">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <a className="info-link" href="">
          Learn More →
        </a>
      </div>
    </div>
  );
}

export default InfoPlate;
