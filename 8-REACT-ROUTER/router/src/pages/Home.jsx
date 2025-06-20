import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import styles from "./Home.module.css";

const Home = () => {
  const url = "http://localhost:3000/products";

  const { data, loading, error } = useFetch(url);

  return (
    <div className={styles.home}>
      <h1>Produtos</h1>
      <ul className={styles.products}>
        {error && <p>{error}</p>}
        {data &&
          data.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R${item.price}</p>
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
