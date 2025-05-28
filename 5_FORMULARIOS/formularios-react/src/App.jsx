import { useState } from "react";

import "./App.css";
import MyForms from "./components/MyForms";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      {/* ao passar o type devemos passar o value da option que deseja ser a inicial*/}
      <MyForms
        user={{
          name: "Carlos",
          email: "Carlos@gmail.com",
          message: "Mensagem Inicial",
          type: "admin",
        }}
      />
    </div>
  );
}

export default App;
