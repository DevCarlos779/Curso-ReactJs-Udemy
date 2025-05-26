//chilfren é uma propriedade padrao do component que é usada quando você quer usar elemento html dentro da chamada dele na outra tela (App.jsx) passando um component html

const Container = ({ children }) => {
  return (
    <div>
      <h2>Este é o titulo do container</h2>
      {children}
    </div>
  );
};

export default Container;
