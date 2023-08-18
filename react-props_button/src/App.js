import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked the button!");
  }

  function handleClick2() {
    console.log("You hit the button!");
  }

  return (
    <div>
      <Button
        text="Example Button"
        color="hotpink"
        isDisabled={false}
        onClick={handleClick}
      />
      <Button
        text="Example Button 2"
        color="blue"
        isDisabled={false}
        onClick={handleClick2}
      />
    </div>
  );
}

function Button({ color, isDisabled, text, onClick }) {
  return (
    <button
      type="button"
      disabled={isDisabled}
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
