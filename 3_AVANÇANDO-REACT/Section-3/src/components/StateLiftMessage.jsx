const StateLiftMessage = ({ gerarMensagem }) => {
  const mensagens = ["Bom dia", "Boa tarde", "Boa noite"];

  return (
    <div>
      <button onClick={() => gerarMensagem(mensagens[0])}>1</button>
      <button onClick={() => gerarMensagem(mensagens[1])}>2</button>
      <button onClick={() => gerarMensagem(mensagens[2])}>3</button>
    </div>
  );
};

export default StateLiftMessage;
