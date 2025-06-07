const Product = ({ id, nome, preco, removeProduct }) => {
  const handleOnClick = () => {
    removeProduct(id);
  };

  return (
    <li key={id}>
      Nome: {nome} || Preço: R${preco}
      <button onClick={handleOnClick}>Remover</button>
    </li>
  );
};

export default Product;
