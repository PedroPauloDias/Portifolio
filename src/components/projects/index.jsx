import React, { useState, useEffect } from 'react'
import { CardProject } from '../CardProjects'

export const Projects = () => {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/projetos");
      const newData = await res.json();
      setProjetos(newData);
    }
    fetchData();
  }, []);



  return (
    <div>
      <h1 className='text-4xl' >Meus Projetos :</h1>
      <div className=' w-full'>
        <ul className='mx-2' >
          {projetos.map((item) => (
            <li key={item.id} className=' p-4 list-none'>
              <div className=' border-4 border-slate-950 '>
                <CardProject
                  title={item.texto}
                  imagem={item.imagem}
                  alt={item.alt}
                  descricao={item.descricao}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
