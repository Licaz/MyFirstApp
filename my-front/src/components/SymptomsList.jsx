import React from "react";
import "./SymptomsList.css";
import { useState } from "react";

const SympDep = [
  "continuous low mood or sadness",
  "feeling hopeless and helpless",
  "having low self-esteem",
  "feeling tearful",
  "feeling worthless or guilty",
  "feeling irritable and intolerant of others",
  "having no motivation or interest in things",
  "finding it difficult to make decisions",
  "not getting any enjoyment out of life",
  "irritable mood",
  "feeling anxious or worried",
  "having suicidal thoughts or thoughts of harming yourself",
];

const SympAnx = [
  "restlessness",
  "a sense of dread",
  "feeling on edge",
  "difficulty concentrating",
  "irritability",
  "muscle tension",
  "disturbed sleep",
  "dizziness",
  "tiredness",
  "a strong, fast or irregular heartbeat",
  "muscle aches and tension",
  "trembling or shaking",
  "a dry mouth",
  "excessive sweating",
  "shortness of breath",
  "tummy ache",
  "feeling sick",
  "a headache",
  "pins and needles",
  "difficulty falling or staying asleep",
];

export default function SymptomsList() {
  const [count, setCount] = useState(0);
  const [adv, setAdv] = useState("");
  function Add(i) {
    if (i.target.checked) {
      setCount((c) => c + 1);
    } else {
      setCount((c) => c - 1);
    }
  }

  function Sub() {
    if (count >= 16) {
      setAdv("Consult your GP for more information");
    } else {
      setAdv("Go cycling, calm down. life is a journey!!!");
    }
    setCount(0);
  }

  return (
    <>
      <h3>
        Please, check the box if you have the symptoms for more than two weeks.
      </h3>
      <div className="col">
        <div>
          {SympDep.map((x) => (
            <div>
              <input type="checkbox" id={x} name={x} onClick={(i) => Add(i)} />
              <label for={x}>{x}</label>
            </div>
          ))}
        </div>
        <div>
          {SympAnx.map((x) => (
            <div>
              <input type="checkbox" id={x} name={x} onClick={Add} />
              <label for={x}>{x}</label>
            </div>
          ))}
        </div>
      </div>
      <button onClick={Sub}>Submit</button>
      <br />
      <div className="adv">{adv}</div>
    </>
  );
}
