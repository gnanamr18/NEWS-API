import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Header = () => {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate("/");
  }
  return (
    <div className="header">
      <h2 onClick={handleOnClick}>
        NewsAPI<span className="circle"></span>Org
      </h2>

      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default Header;
