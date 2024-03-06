import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import TestHead from "./components/TestHead";

function App() {
  const [count, setCount] = useState(0);

  let header = "Depression and Anxiety Disorder";
  let info =
    " There are long-term condictions rather than an specitif event. Take the quizz below and check if you are presenting the symptoms.";

  return (
    <>
      <TestHead text="Welcome" color="plum" />
      <div>
        <h2>{header}</h2>
        <p>{info}</p>
      </div>
      <h1>Mental Healt Quizz</h1>
      <h3>{header}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <SymptomsList />
      <p className="read-the-docs">
        Please consult the HSE for more information
      </p>
    </>
  );
}

export default App;
