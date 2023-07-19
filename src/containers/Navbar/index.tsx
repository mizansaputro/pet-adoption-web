import React, { FC } from "react";
import { useNavbar } from "./navbar.logic";

const Navbar: FC = () => {
  const { menus } = useNavbar();
  return (
    <ul>
      {menus?.map((item) => {
        return (
          <li key={item.value}>
            {item.title} 
          </li>
        );
      })}
    </ul>
  )
}

export default Navbar;
