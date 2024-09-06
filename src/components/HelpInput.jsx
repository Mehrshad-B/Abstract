import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function HelpInput() {
  return (
    <div className="help-input">
      <h1>How can we help?</h1>
      <div className="input-container">
        <input className="search-input" placeholder="Search" />
        <button className="input-button">
          <ArrowForwardIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
}

export default HelpInput;
