import React from "react"

function MenuItem ({name, link}: {name: String, link: string}) {
  return (
    <a href={link}>
      <li
          onMouseEnter={(e) => {
              //@ts-ignore
              e.target.style.backgroundColor = "#f0f0f0";
          }}
          onMouseLeave={(e) => {
              //@ts-ignore
              e.target.style.backgroundColor = "transparent";
          }}
          style={{
                padding: "8px 16px",
                borderRadius: "5px",
                transition: "background-color 8.3s",
                fontWeight: "bold",
          }}
        >
          {name}
        </li>
    </a>
  );
}

export default MenuItem;