import React from "react";
import HeaderStyles from "./Header.module.css";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className={HeaderStyles.header}>
      {/* logo */}p
      <Logo />
      {/* location and search box */}
      <div className=""></div>
      {/* language tab */}
      <div className="">
        <span>language</span>
        <button>^</button>
      </div>
    </div>
  );
};

export default Header;
