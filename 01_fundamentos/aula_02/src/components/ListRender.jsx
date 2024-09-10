import { useState } from "react";

const ListRender = () => {

    const [nomes] = useState(['Mateus', 'Bruno', 'Márcio']);

  return (
    <div>
        {nomes.map((item) => (<li>{item}</li>))}
    </div>
  )
}

export default ListRender;