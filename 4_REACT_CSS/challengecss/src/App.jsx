import "./App.css";
import CarList from "./components/CarList";

function App() {
  const carros = [
    {
      id: 1,
      nome: "SW4",
      marca: "Toyota",
      ano: 2020,
    },
    {
      id: 2,
      nome: "Hilux",
      marca: "Toyota",
      ano: 2018,
    },
    {
      id: 1,
      nome: "Strada",
      marca: "Fiat",
      ano: 2010,
    },
    {
      id: 1,
      nome: "Strada",
      marca: "Fiat",
      ano: 2010,
    },
    {
      id: 1,
      nome: "Strada",
      marca: "Fiat",
      ano: 2010,
    },
    {
      id: 1,
      nome: "Strada",
      marca: "Fiat",
      ano: 2010,
    },
  ];

  return (
    <div className="App">
      <h1 className="Title_Challenge">Lista de Carros</h1>
      <div className="Area_lista">
        {carros.length > 0 ? (
          carros.map((carro) => (
            <CarList
              key={carro.id}
              nome={carro.nome}
              marca={carro.marca}
              ano={carro.ano}
            />
          ))
        ) : (
          <p>Não há Carros!</p>
        )}
      </div>
    </div>
  );
}

export default App;
