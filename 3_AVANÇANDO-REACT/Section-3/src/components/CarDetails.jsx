const CarDetails = ({ marca, ano, km, novo }) => {
  return (
    <div>
      <h2>Detalhes do Carro</h2>
      <p>Marca: {marca}</p>
      <p>Ano: {ano}</p>
      <p>Quilometragem: {km}</p>
      {novo && <p>Este carro é Novo!</p>}
    </div>
  );
};

export default CarDetails;
