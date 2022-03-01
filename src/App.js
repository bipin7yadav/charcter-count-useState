import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function change() {
    // setCount(count => count + 1)
    const a = document.getElementById("p").value;
    setCount(a.length);
    console.log(a.length);
  }
  return (
    <div className="App">
      <h1>Character count {count}</h1>
      <textarea onChange={change} id="p"></textarea>
      <h2>characters remaining , {56 - count}</h2>
    </div>
  );
}
