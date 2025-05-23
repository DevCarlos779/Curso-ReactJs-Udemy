import React from "react";

const Events = () => {
  const handleOnClick = (e) => {
    //"e" passado no parametro sao os dados e informações do evento

    console.log("Clicou!");
  };

  const RederizaJsx = (x) => {
    //funçoes podem retornar como valor um html:

    if (x) {
      return <h1>Posso renderizar isso</h1>;
    } else {
      return <h1>Ou posso renderizar isso</h1>;
    }
  };

  return (
    <div>
      <div>
        <button onClick={handleOnClick}>Click</button>
      </div>
      <div>
        <button onClick={() => console.log("Clicou!")}>Click</button>
      </div>
      {RederizaJsx(true)}
      {RederizaJsx(false)}
    </div>
  );
};

export default Events;
