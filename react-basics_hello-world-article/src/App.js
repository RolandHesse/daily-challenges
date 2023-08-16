import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Diskusfische</h1>
      <p>
        Diskusfische oder Diskusbuntbarsche (Symphysodon) sind eine Gattung der
        Süßwasserfische in der Familie der Buntbarsche aus dem
        Amazonasstromsystem im tropischen Südamerika.
      </p>
    </article>
  );
}
