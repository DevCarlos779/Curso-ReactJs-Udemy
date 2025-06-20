import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";

const Product = () => {
  const { id } = useParams();

  const url = `http://localhost:3000/products/${id}`;
  const { data, loading, error } = useFetch(url);

  console.log(data);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro!</p>}
      {loading && <p>Carregando</p>}
      {data && (
        <div>
          <h1>{data.name}</h1>
          <p>R$ {data.price}</p>
          <Link to={`/products/${data.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};

export default Product;
