import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AbstractIcon from "./AbstractIcon";

function Header() {
  return (
    <header>
      <AbstractIcon />
      <h1 className="header-abstract">
        <a href="">Abstract</a>
      </h1>
      <h1 className="header-help-center">
        <a href="">Help Center</a>
      </h1>
      <div className="header-button-container">
        <button className="search-button">
          <SearchIcon fontSize="large" />
        </button>
        <button className="menu-button">
          <MenuIcon fontSize="large" />
        </button>
      </div>
    </header>
  );
}
export default Header;
