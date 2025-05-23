import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Seção 3</h1>

      {/* Imagem Em Public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
    </div>
  );
}

export default App;
