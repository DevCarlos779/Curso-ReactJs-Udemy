//CSS
import styles from "./GameOver.module.css";

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;
