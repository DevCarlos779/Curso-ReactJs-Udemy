import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do Context: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add value context</button>
    </div>
  );
};

export default Home;
