import React from "react";

import MyComponent from "./MyComponent";

const TempExpressionsComponent = () => {
  const name = "Carlos";

  //aprendendo template expression (usar variaveis e termos js no html)

  const programador = {
    idade: 10,
    nome: "Carlos",
    Area: "Front-End",
  };

  return (
    <div>
      <h1>Olá, {name}!</h1>
      <p>
        {programador.nome} tem {programador.idade} anos e trabalha com{" "}
        {programador.Area}
      </p>
      <MyComponent />
    </div>
  );
};

export default TempExpressionsComponent;
