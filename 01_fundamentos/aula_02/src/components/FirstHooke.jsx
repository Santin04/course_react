//importando o hook useState
import { useState } from "react";

const FirstHooke = () => {

  let valor = 10;

  //criando o hook e passando o valor inicial 5
  const [number, setNumber] = useState(5);

  return (
    <div>
      {/* Dessa forma o valor não se altera */}
      <p>Valor: {valor}</p>
      <button onClick={valor = 15}>Mudar valor</button>

      <p>Segundo valor: {number}</p>
      <button onClick={() => setNumber(10)}>Mudar valor</button>
    </div>
  );
};

export default FirstHooke;