import React, { useState } from "react";
import { checkGuess } from "../../game-helpers";

function Input({ handleInput }) {
  const [guess, setGuess] = useState("");

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      handleInput(guess);
      setGuess("");
    }}>
      <label htmlFor="guess-input">Enter Guess: </label>
      <input
        required
        type="text"
        id="guess-input"
        title="5 charachters required"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Input;
