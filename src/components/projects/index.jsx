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
    <div className='bg-neutral-800'>
      <h1 className='text-4xl text-white text-center pt-3 ' >Meus Projetos </h1>
      <div className=' w-full  pt-4'>
        <ul className='m-2 ' >
          {projetos.map((item) => (
            <li key={item.id} className=' p-4 list-none'>
              <div className=' '>
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
