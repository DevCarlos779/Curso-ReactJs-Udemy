//CSS
import { useState, useRef } from "react";
import styles from "./Game.module.css";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  letrasAcertadas,
  letrasErradas,
  tentativas,
  pontos,
}) => {
  const [letter, setLetter] = useState("");

  const letterInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");
    letterInput.current.focus();
  };

  return (
    <div className={styles.game}>
      <p className={styles.pontos}>
        <span>Pontuação: {pontos}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h3 className={styles.dica}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {tentativas} tentativas</p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          letrasAcertadas.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.quadradoBranco}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente advivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInput}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className={styles.game}>
        <p>Letras já utilizadas:</p>
        {letrasErradas.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
