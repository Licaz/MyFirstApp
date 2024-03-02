import { useState } from "react";

export default function TestHead({ text, color }) {
  const [headerText, setHeaderText] = useState("My component one");

  return <h1 className={color}> {text} </h1>;
}
