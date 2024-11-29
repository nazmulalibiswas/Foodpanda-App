import React from "react"
import MenuItem from "./menuitem";
import MenuWrapper from "./menuWrapper";

function Header () {
  return (
  <div 
  className="header"
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vh",
  }}
>
  <img
  src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/800w/canva-yellow-abstract-cooking-fire-free-logo-iY2pBFWGLgU.jpg" 
  alt="logo"
  style={{height: "50px", width: "50px"}}
  />
  <MenuWrapper>
      <MenuItem name={"Home"} link="/" />
      <MenuItem name={"Items"} link="/items" />
      <MenuItem name={"About"} link="/about" />
      <MenuItem name={"Contact"} link="/contact" />
  </MenuWrapper>
      </div>
);
}

export default Header;