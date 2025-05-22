import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Cirando Projeto com Vite</h1>
      <h2>crie a pasta raiz do projeto</h2>
      <p>dentro dela rode o código: npm create vite@latest</p>
      <h2>depois rode os seguintes códigos:</h2>
      <p>cd nome-projeto</p>
      <p>npm i</p>
      <h2>Codigo para rodar o projeto:</h2>
      <p>npm run dev</p>
    </>
  )
}

export default App
