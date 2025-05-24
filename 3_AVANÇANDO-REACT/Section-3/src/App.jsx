import { useState } from "react";

//imagens
import ImgAssets from "./assets/react.svg";
import viteLogo from "/vite.svg";

//styles
import "./App.css";
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUsername from "./components/ShowUsername";
import CarDetails from "./components/CarDetails";

function App() {
  const nomeUsuario = "Carlos";

  const carros = [
    {
      id: 1,
      marca: "VW",
      ano: 2010,
      km: 4500,
      novo: false,
    },
    {
      id: 2,
      marca: "Marcedes",
      ano: 2025,
      km: 0,
      novo: true,
    },
    {
      id: 3,
      marca: "BMW",
      ano: 2020,
      km: 0,
      novo: true,
    },
  ];

  return (
    <div>
      <h1>Seção 3</h1>

      {/* Imagem Em Public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem Em Assets */}
      <div>
        <img src={ImgAssets} alt="Paisagem" />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <ShowUsername nome={nomeUsuario} idade={19} />
      {carros.map((carro) => (
        <CarDetails
          marca={carro.marca}
          ano={carro.ano}
          km={carro.km}
          novo={carro.novo}
          id={carro.id}
        />
      ))}
    </div>
  );
}

export default App;
