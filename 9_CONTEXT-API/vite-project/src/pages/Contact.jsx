import { useTitleColorContext } from "../hooks/useTitleColorContex";

const Contact = () => {
  const { color, dispach } = useTitleColorContext();

  const setTitleColor = (cor) => {
    dispach({ type: cor });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Contact</h1>
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  );
};

export default Contact;
