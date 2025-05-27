import styles from "./CarList.module.css";

const CarList = ({ nome, marca, ano }) => {
  return (
    <div className={styles.box_car}>
      <h2 className={styles.title_Car}>Detalhes Carro</h2>
      <p>Nome: {nome}</p>
      <p>Marca: {marca}</p>
      <p>Ano: {ano}</p>
    </div>
  );
};

export default CarList;
