import react from "react";
import MenuItem from "../Header/menuitem";

function Footer(){
  return(
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "20px",
        alignItems: "center",
      }}
      >
        <div className="copyright">
          <p>&copy 2024 Ecommerce</p>
        </div>
        <div className="quicklinks">
          <ul>
            <MenuItem name={"Home"} />
            <MenuItem name={"Items"} />
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
  );
}

export default Footer;