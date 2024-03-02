import { useState } from "react";

export default function TestHead(Props) {
  const [headerText, setHeaderText] = useState("My component one");

  return <h1 className={props.color}> {props.text} </h1>;
}
