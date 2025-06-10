import { useCounterContext } from "../hooks/useCounterContext";

const About = () => {
  const { counter, setCounter } = useCounterContext();

  return (
    <div>
      <h1>About</h1>
      <p>Valor do Context: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add value context</button>
    </div>
  );
};

export default About;
