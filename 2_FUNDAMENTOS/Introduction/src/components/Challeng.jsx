import React from "react";

const Challeng = () => {
  const A = 10;
  const B = 20;

  return (
    <div>
      <h1>Challeng 1</h1>
      <p>valor A: {A}</p>
      <p>valor B: {B}</p>
      <button onClick={() => console.log(A + B)}>Somar</button>
    </div>
  );
};

export default Challeng;
