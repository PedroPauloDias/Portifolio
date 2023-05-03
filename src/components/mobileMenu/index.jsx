import React from 'react'
import { XCircle } from "@phosphor-icons/react";

export const MobileMenu = ({ HandlerMenu }) => {
  return (



    <div className='w-screen h-screen absolute top-0 right-0 left-0  bottom-0 z-50 bg-slate-700 '>
      <div className=' w-screen  p-3 flex justify-end '>
        <button
          className=' mr-2 mt-2 '
          onClick={HandlerMenu}
        >
          <XCircle size={32} color="#fff" />
        </button>
      </div>
      <ul className='w-full h-3/6 flex mt-4 flex-col items-center justify-around text-xl text-white gap-y-2'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Sobre Mim</a>
        </li>
        <li>
          <a href='#'>Projetos</a>
        </li>
        <li>
          <a href='#'>Contato</a>
        </li>

      </ul>
    </div>
  )
}
