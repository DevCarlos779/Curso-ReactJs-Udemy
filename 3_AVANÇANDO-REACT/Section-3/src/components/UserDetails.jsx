const UserDetails = ({ nome, idade, profissao }) => {
  return (
    <div>
      <h2>Detalhes Usuario</h2>
      <p>Nome: {nome}</p>
      <p>Idade: {idade}</p>
      <p>Profissão: {profissao}</p>
      {idade >= 18 ? (
        <p>Este Usuário está apto a tirar a Habilitação!</p>
      ) : (
        <p>Este Usuário Não está apto a tirar a Habilitação!</p>
      )}
    </div>
  );
};

export default UserDetails;
