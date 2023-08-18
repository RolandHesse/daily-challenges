import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy }) {
  return <h1>{isHappy ? "🥳" : "😢"}</h1>;
}
