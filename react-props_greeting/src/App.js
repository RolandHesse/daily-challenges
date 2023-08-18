import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Mareike" />
    </div>
  );
}

function Greeting({ name }) {
  return <h1>Hello, {name === "Mareike" ? "Coach" : name}!</h1>;
}
