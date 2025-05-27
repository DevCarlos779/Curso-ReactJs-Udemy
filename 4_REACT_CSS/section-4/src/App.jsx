//pacotes
import { useState } from "react";

//styles
import "./App.css";
import MyComponent from "./components/MyComponent";
import Title from "./components/Title";

//components

function App() {
  const n = 15;

  const redTitle = true;

  return (
    <div className="App">
      <h1>React com CSS</h1>

      {/* CSS a nivel de component */}
      <MyComponent />

      {/* Inline Css */}
      <p
        style={{
          backgroundColor: "red",
          color: "blue",
          padding: "25px",
          borderTop: "2px solid blue",
        }}
      >
        Este elemento foi estilizado inline
      </p>

      {/* Inline Css Dinamico */}

      <h2 style={n > 10 ? { color: "red" } : { color: "blue" }}>Teste</h2>

      {/* Classe Css Dinamica */}

      <h2 className={redTitle ? "redTitle" : "title"}>
        Titulo com classe dinamica
      </h2>

      <Title />
    </div>
  );
}

export default App;
