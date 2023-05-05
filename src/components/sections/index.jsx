import React, {useEffect, useState, Component} from 'react'
import { Info } from './info';




export const Sections = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/hello");
      const newData = await res.json();
      setData(newData);
    }
    fetchData();
  }, []);



  

  return (
    <div className=' mt-80  text-white p-2 h-full bg-teal-950'>
      <h1>Meus Dados:</h1>

      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Info
             title={item.texto}
             imagem={item.imagem}
             alt={item.alt}
             descricao={item.descricao}
             />           
          </li>
        ))}
      </ul>
     
    </div>
  );
}
  

  

