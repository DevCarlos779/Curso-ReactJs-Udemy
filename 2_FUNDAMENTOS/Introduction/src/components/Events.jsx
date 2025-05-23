import React from "react";

const Events = () => {
  const handleOnClick = (e) => {
    //"e" passado no parametro sao os dados e informações do evento

    console.log("Ciicou");
  };

  return (
    <div>
      <div>
        <button onClick={handleOnClick}>Click</button>
      </div>
    </div>
  );
};

export default Events;
