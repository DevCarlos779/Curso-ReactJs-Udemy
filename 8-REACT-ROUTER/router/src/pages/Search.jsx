import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import styles from "./Search.module.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  console.log(searchParams);

  const url = "http://localhost:3000/products?" + searchParams;

  const { data, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados disponiveis</h1>
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

export default Search;
