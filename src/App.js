import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //State for displaying message
  let [message, setMessage] = useState("");

  var userInput;

  function inputHandler(e) {
    userInput = e.target.value;
  }

  function leapChecker(input) {
    parseInt(userInput);

    if (input % 400 === 0 || (input % 4 === 0 && input % 100 !== 0)) {
      setMessage("You were born in a leap year");
    } else {
      setMessage("You were not born in a leap year");
    }
  }

  function clickHandler() {
    if (userInput == null) {
      setMessage("Please enter YoB 🥀");
    } else if (isNaN(userInput)) {
      setMessage("Please enter input in numbers");
    } else {
      leapChecker(userInput);
    }
  }

  return (
    <div className="card">
      <h1 className="header">LeaPy🤣Year</h1>

      <div className="form-column">
        <label>Enter your year of birth 💝</label>
        <input
          type="text"
          onChange={inputHandler}
          className="field"
          placeholder="Eg : 1991"
        ></input>
        <button onClick={clickHandler} className="button">
          Submit
        </button>

        <h1 className="message">{message}</h1>
      </div>
    </div>
  );
}
