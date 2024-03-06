import React from "react";
import "./SymptomsList.css";

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
  //function for unclick
  return (
    <>
      <p>
        Please, check the box if you have the symptoms for more than two weeks.
      </p>
      {SympDep.map((x) => (
        <div>
          <input type="checkbox" id={x} name={x} />
          <label for={x}>{x}</label>
        </div>
      ))}
      {SympAnx.map((x) => (
        <div>
          <input type="checkbox" id={x} name={x} />
          <label for={x}>{x}</label>
        </div>
      ))}
    </>
  );
}
