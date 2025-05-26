//imagens
import ImgAssets from "./assets/react.svg";

//styles
import "./App.css";

//components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUsername from "./components/ShowUsername";
import CarDetails from "./components/CarDetails";
import FragmentComponent from "./components/FragmentComponent";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import { useState } from "react";
import StateLiftMessage from "./components/StateLiftMessage";
import UserDetails from "./components/UserDetails";

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

  const users = [
    {
      id: 1,
      nome: "Carlos",
      idade: 19,
      profissao: "Dev Frontend",
    },
    {
      id: 2,
      nome: "Emanuel",
      idade: 10,
      profissao: "Dev Backend",
    },
    {
      id: 3,
      nome: "Pinho",
      idade: 23,
      profissao: "Dev Full-Stack",
    },
  ];

  const showMessage = () => {
    console.log("Ativou Evento do Pai!");
  };

  const [message, setMessage] = useState("");

  const gerarMensagem = (msg) => {
    setMessage(msg);
  };

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
          key={carro.id}
          marca={carro.marca}
          ano={carro.ano}
          km={carro.km}
          novo={carro.novo}
        />
      ))}
      <FragmentComponent />
      <Container>
        <p>Este é o conteudo</p>
      </Container>

      <ExecuteFunction myFunction={showMessage} />

      <Message msg={message} />
      <StateLiftMessage gerarMensagem={gerarMensagem} />
      <h1>Atividade Seção 3</h1>
      {users.map((user) => (
        <UserDetails
          key={user.id}
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))}
    </div>
  );
}

export default App;
