import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Discus Fish</h2>
      <label htmlFor="inputID">Name of the Input Field</label>
      <input
        id="inputID"
        type="text"
        placeholder="You can write something here but nothing will happen"
      ></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/Discus_(fish)"
      >
        Read about Discus Fish
      </a>
    </article>
  );
}
