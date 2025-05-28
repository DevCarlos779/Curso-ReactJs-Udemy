import { useState } from "react";
import styles from "./MyForms.module.css";

const MyForms = ({ user }) => {
  //inserindo dados default no input
  //metodo 1:
  const [email, setEmail] = useState(user ? user.email : "");
  const [message, setMessage] = useState(user ? user.message : "");
  const [type, setType] = useState(user ? user.type : "");
  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  //metodo 2:
  const [name, setName] = useState(user ? user.name : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Enviando dados: Nome= ${name}, Email= ${email} e Tipo: ${type}`
    );
    console.log(`Enviando Mensagem: ${message}`);

    //limpando form após o envio
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Insira seu Nome"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Insira seu E-mail"
          onChange={handleOnChange}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="msg">Mensagem:</label>
        <textarea
          type="textarea"
          name="msg"
          placeholder="Insira uma Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        ></textarea>
      </div>
      <div>
        <label htmlFor="tipo">Tipo de Conta:</label>
        <select
          name="tipo"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="user">Usuario</option>
          <option value="edit">Editor</option>
          <option value="admin">Administrador</option>
        </select>
      </div>
      <input className={styles.btn} type="submit" value="Enviar" />
    </form>
  );
};

export default MyForms;
