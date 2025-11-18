import React from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

 
  const title = location.pathname
    .split("/") 
    .filter(Boolean) 
    .map(
      (segment) =>
        segment
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
    )
    .join(" / "); 

  return (
    <div className="header">
      <h2>Route: {title}</h2>
    </div>
  );
};

export default Header;
