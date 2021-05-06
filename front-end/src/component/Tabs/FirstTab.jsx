import React, { useState } from "react";
import "./FirstTab.css";
import "./Destination";
import { Destination } from "./Destination";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import FirstTabOneWay from "./FirstTabOneWay";
import FirstTabMuti from "./FirstTabMuti";
function FirstTab() {
  const [choice, setChoice] = useState("");

  const handleChange = (e) => {
    setChoice(e.target.value);
    console.log(e.target.value);
    console.log(choice);
  };

  return (
    <div className="button-form-first">
      <form className="radio-form">
        <input
          type="radio"
          value="oneway"
          id="oneway"
          onChange={handleChange}
          name="way"
          className="button-radio"
        />
        <label for="male">One-way / Round-trip</label>

        <input
          type="radio"
          value="multi"
          id="multi"
          onChange={handleChange}
          name="way"
          className="button-radio"
        />
        <label for="female">Multi-city</label>
      </form>
      { choice === "oneway" ? (
       <FirstTabOneWay/>
      ) : (
        <FirstTabMuti/>
      )}
      <form className="search-form">
        <button className="search-button">
          <AiOutlineSearch />
          <Link to="/product"> Tìm chuyến bay</Link>
        </button>
      </form>
    </div>
  );
}

export default FirstTab;
