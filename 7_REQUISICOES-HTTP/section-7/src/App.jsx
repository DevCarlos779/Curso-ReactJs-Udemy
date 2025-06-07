import { useState, useEffect } from "react";
import { useFetch } from "./hooks/useFetch";

//styles
import "./App.css";
import Product from "./components/Product";

function App() {
  //crio o elemento que vai receber o array de objetos dos produtos
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  //url da api
  const url = "http://localhost:3000/products";

  //fazendo fetch usando o hook custom
  const { data, httpConfig, loading, error, httpConfigDelete } = useFetch(url);

  //Adicionando novo produto
  //primeiramente crio os useState de nome e produto para os inputs

  //crio uma função assincrona para ser executada no onSubmit do form
  const handleOnChange = async (e) => {
    //faço ele nao recarregar a pagina
    e.preventDefault();

    //crio um objeto que armazena os dados do produto que quero enviar
    //esse objeto deve seguir os padroes do onjetos da minha api
    const product = {
      name: nome,
      price: preco,
    };

    console.log(product);

    //faço a requisição e passo um objeto de configurações para o fetch
    // const res = await fetch(url, {
    //   //metodo post (enviar)
    //   method: "POST",
    //   //tipo de arquivo (json)
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   //conteudo do arquivo (meu objeto produto convertido em json)
    //   body: JSON.stringify(product),
    // });

    // 5 - refatorando o POST:

    httpConfig(product, "POST");

    //carregamento dinamico de dados
    // const addedProduct = await res.json();
    // setProdutos((prevProdutos) => [...prevProdutos, addedProduct]);

    setNome("");
    setPreco("");
  };

  const removeProduct = (id) => {
    httpConfigDelete("DELETE", id);
  };

  return (
    <div className="App">
      <h1>Lista de Produtos (Fetch usando hook)</h1>
      {error && <p>{error}</p>}
      {loading && <p>Carregando Dados!</p>}
      {!error && (
        <ul>
          {data &&
            data.map((produto) => (
              <Product
                id={produto.id}
                nome={produto.name}
                preco={produto.price}
                removeProduct={removeProduct}
              />
            ))}
        </ul>
      )}
      <div className="add_product">
        <form onSubmit={handleOnChange}>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              name="nome"
              onChange={(e) => setNome(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              value={preco}
              name="preco"
              onChange={(e) => setPreco(e.target.value)}
            />
          </label>
          {loading && (
            <input id="btn_enviar" type="submit" disable value="Aguarde" />
          )}
          {!loading && <input id="btn_enviar" type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
