import { useState } from "react";

const ManageData = () => {
  const [nome, setNome] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu Nome"
        onChange={(e) => setNome(e.target.value)}
      />
      <p>Nome: {nome}</p>
    </div>
  );
};

export default ManageData;
