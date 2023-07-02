import React from "react";
import me from "./menu.module.css";

const Menu = ({ isopen, children }) => {
  return (
    <>
      <div className={me.maincont}>{isopen && children}</div>
    </>
  );
};

export default Menu;
