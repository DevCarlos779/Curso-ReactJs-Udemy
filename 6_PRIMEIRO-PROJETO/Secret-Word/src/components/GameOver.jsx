//CSS
import styles from "./GameOver.module.css";

const GameOver = ({ retry, pontos }) => {
  return (
    <div className={styles.gameOver}>
      <h1>Fim de Jogo!</h1>
      <h2>
        A sua pontuação foi: <span>{pontos}</span>
      </h2>
      <button onClick={retry}>Resetar Jogo</button>
    </div>
  );
};

export default GameOver;
