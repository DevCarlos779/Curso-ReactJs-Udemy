import { useState } from "react";

const CondicionalRender = () => {
  const [x, setX] = useState(true);

  const [users, setUsers] = useState(["Carlos"]);

  return (
    <div>
      <h1>Exibindo coisas diferentes de acordo com uma condição</h1>
      {x && <p>Agora X é true</p>}
      {!x && <p>Agora X é falso</p>}
      <button onClick={() => setX(!x)}>Mudar estado do X</button>
      <h1>If Ternário</h1>
      {users.length > 0 ? (
        users.map((user, index) => <p key={index}>{user}</p>)
      ) : (
        <p>Não há usuarios</p>
      )}
    </div>
  );
};

export default CondicionalRender;
