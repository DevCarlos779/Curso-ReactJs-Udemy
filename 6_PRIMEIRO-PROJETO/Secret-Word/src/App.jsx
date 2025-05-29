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

  //Escolhe uma categoria e uma palavra aleatoriamente
  const pickWordAndCategory = () => {
    //escolhendo categoria
    const allCategories = Object.keys(words);
    const category =
      allCategories[Math.floor(Math.random() * allCategories.length)];

    //escolhendo palavra
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    //passando a palavra e a categoria com retorno da função
    return [category, word];
  };

  //Inicia o Jogo
  const startAndConfigureGame = () => {
    //pegando os returns da função
    const [category, word] = pickWordAndCategory();

    //criando um array com as letras da palavra
    let wordLetters = word.split("");
    console.log(wordLetters);

    //tranformando letras maiusculas em minusculas
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    //setando nos seus respectivos useStates
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    //chama a tela de jogo
    setGameStage(stages[1].name);
  };

  //verifica a letra
  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  //Resetar o Jogo
  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && (
        <StartScreen startGame={startAndConfigureGame} />
      )}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
