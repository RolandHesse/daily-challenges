import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("You clicked the button!");
  }

  return <Button text="Example Button" color="hotpink" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ color: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
