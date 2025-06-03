//React
import { useState, useEffect, useCallback } from "react";

//CSS
import "./App.css";

//data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

//Stages
const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedCategory, setPickedCategory] = useState("");
  const [pickedWord, setPickedWord] = useState("");
  const [letters, setLetters] = useState("");

  const [letrasAcertadas, setLetrasAcertadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativas, setTentativas] = useState(3);
  const [pontos, setPontos] = useState(0);

  //Escolhe uma categoria e uma palavra aleatoriamente
  const pickWordAndCategory = useCallback(() => {
    //escolhendo categoria
    const allCategories = Object.keys(words);
    const category =
      allCategories[Math.floor(Math.random() * allCategories.length)];

    //escolhendo palavra
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    //passando a palavra e a categoria com retorno da função
    return [category, word];
  }, [words]);

  //Inicia o Jogo
  const startAndConfigureGame = useCallback(() => {
    clearLetterStates();
    setTentativas(3);
    //pegando os returns da função
    const [category, word] = pickWordAndCategory();

    //criando um array com as letras da palavra
    let wordLetters = word.split("");

    //tranformando letras maiusculas em minusculas
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //setando nos seus respectivos useStates
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    //chama a tela de jogo
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  //verifica a letra
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    //verifica se a letra ja foi utilizada:

    if (
      letrasAcertadas.includes(normalizedLetter) ||
      letrasErradas.includes(normalizedLetter)
    ) {
      return;
    }

    //verifica se é uma letra certa ou errada:

    if (letters.includes(normalizedLetter)) {
      setLetrasAcertadas((actualLetrasAcertadas) => [
        ...actualLetrasAcertadas,
        normalizedLetter,
      ]);
    } else {
      setLetrasErradas((actualLetrasErradas) => [
        ...actualLetrasErradas,
        normalizedLetter,
      ]);

      setTentativas((actualTentativas) => actualTentativas - 1);
    }
  };

  const clearLetterStates = () => {
    setLetrasAcertadas([]);
    setLetrasErradas([]);
  };

  //monitorando as tentativas
  useEffect(() => {
    if (tentativas <= 0) {
      //resetando os arrays de letras:
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [tentativas]);

  //monitorando as letras acertadas
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (letrasAcertadas.length == uniqueLetters.length) {
      //venceu
      setPontos((actualPontos) => (actualPontos += 100));
      startAndConfigureGame();
    }
  }, [letrasAcertadas]);

  //Resetar o Jogo
  const retry = () => {
    //resetando pontos e tentativas
    setPontos(0);
    setTentativas(3);

    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && (
        <StartScreen startGame={startAndConfigureGame} />
      )}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          letrasAcertadas={letrasAcertadas}
          letrasErradas={letrasErradas}
          tentativas={tentativas}
          pontos={pontos}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} pontos={pontos} />}
    </div>
  );
}

export default App;
