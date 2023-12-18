import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const navigate = useNavigate();
  const [inputvalue, setinputvalue] = useState("");
  const [finalvalue, setfinalvalue] = useState("");

  function handleOnChange(e) {
    setinputvalue(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    setfinalvalue(inputvalue);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      setfinalvalue(inputvalue);
    }
  }

  useEffect(() => {
    if (finalvalue) {
      console.log(finalvalue);
      navigate("/custompage", { state: finalvalue });
      setfinalvalue("");
    }
  }, [finalvalue, navigate]);

  return (
    <div className="search">
      <form onSubmit={handleOnSubmit}>
        <span style={{ display: inputvalue ? "none" : "inline-block" }}>
          {<CiSearch />}
        </span>
        <input
          type="text"
          name=""
          placeholder="      Search"
          onChange={handleOnChange}
          value={inputvalue}
          onKeyDown={handleKeyDown}
          required
        />

        <button type="Submit">Go</button>
      </form>
    </div>
  );
};

export default Search;
