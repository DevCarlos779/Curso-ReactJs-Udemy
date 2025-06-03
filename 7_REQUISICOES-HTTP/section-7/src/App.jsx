import { useState, useEffect } from "react";

//styles
import "./App.css";

function App() {
  //crio o elemento que vai receber o array de objetos dos produtos
  const [produtos, setProdutos] = useState([]);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");

  //url da api
  const url = "http://localhost:3000/products";

  //uso use efect para fazer a requisição apenas uma vez
  useEffect(() => {
    //crio uma função assincrona que vai esperar cada etapa da requisição
    async function fetchData() {
      //executo a requisição e guardo a resposta em res
      const res = await fetch(url);

      //a resposta que está em res está em string, crio uma variavel data que
      //recebe o valor da res é json
      const data = await res.json();

      //seto produtos como a resposta da minha requisição (array de objetos)
      setProdutos(data);
    }

    fetchData();
  }, []);

  console.log(produtos);

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
    const res = await fetch(url, {
      //metodo post (enviar)
      method: "POST",
      //tipo de arquivo (json)
      headers: {
        "Content-Type": "application/json",
      },
      //conteudo do arquivo (meu objeto produto convertido em json)
      body: JSON.stringify(product),
    });

    //carregamento dinamico de dados
    const addedProduct = await res.json();
    setProdutos((prevProdutos) => [...prevProdutos, addedProduct]);

    setNome("");
    setPreco("");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <li key={produto.id}>
              Nome: {produto.name} || Preço: R${produto.price}
            </li>
          ))
        ) : (
          <p>Não há produtos!</p>
        )}
      </ul>
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
          <input id="btn_enviar" type="submit" value="Criar" />
        </form>
      </div>
    </div>
  );
}

export default App;
