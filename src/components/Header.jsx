import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AbstractIcon from "./AbstractIcon";

function Header() {
  const [isClicked, setClick] = useState(false);
  function openClick() {
    setClick(true);
  }
  function closeClick() {
    setClick(false);
  }

  return (
    <div>
      {isClicked ? (
        <header className="search-header">
          <input className="search-input" placeholder="Search" />
          <button className="close-button" onClick={closeClick}>
            <CloseIcon />
          </button>
        </header>
      ) : (
        <header>
          <AbstractIcon />
          <h1 className="header-abstract">
            <a href="">Abstract</a>
          </h1>
          <h1 className="header-help-center">
            <a href="">Help Center</a>
          </h1>
          <div className="header-button-container">
            <button className="search-button" onClick={openClick}>
              <SearchIcon fontSize="large" />
            </button>
            <button className="menu-button">
              <MenuIcon fontSize="large" />
            </button>
          </div>
        </header>
      )}
    </div>
  );
}
export default Header;
