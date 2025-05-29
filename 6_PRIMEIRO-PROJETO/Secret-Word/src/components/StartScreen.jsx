//CSS
import styles from "./StartScreen.module.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no Botão para começar o jogo</p>
      <button onClick={startGame}>Começar a jogar</button>
    </div>
  );
};

export default StartScreen;
