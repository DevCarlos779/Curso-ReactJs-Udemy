import { useState } from "react";

const ListRender = () => {
  const [list, setList] = useState(["Matheus", "Pedro", "Josias"]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 3);

    setList((prevUsers) => {
      return prevUsers.filter((user, index) => index != randomNumber);
    });
  };

  return (
    <div>
      <ul>
        {list.map((nome, index) => (
          <li key={index}>Nome: {nome}</li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Deletar usuario aleatorio</button>
    </div>
  );
};

export default ListRender;
