import React from "react";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function Kurs() {
  return (
    <>
      <div>
        <Select options={options} />
      </div>
    </>
  );
}
