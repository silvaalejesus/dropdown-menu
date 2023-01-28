import React from "react";
// importe os dados
import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";

const Navbar = () => {
  return (
    <nav>
      <ul className="menus">
        {/* percorra-os  */}
        {menuItems.map((menu, index) => {
          //   console.log("first", menu);
          return (
            // renderize-os no JSX
            <MenuItems items={menu} key={index} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
