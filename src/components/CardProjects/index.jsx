import React from 'react'
import Image from 'next/image'
import {GithubLogo , CaretDoubleRight} from '@phosphor-icons/react'

export const CardProject = ({ imagem, alt, title, descricao }) => {
  return (
    <div className='  flex min-h-full items-center justify-center bg-neutral-800'>
      <div className=' gap-5'>
        <div className='group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
          <div className='h-96 w-72'>
            <Image src={imagem} alt={alt} width={300} height={350} className=' h-full w-full object-cover border-neutral-800 group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500 ' />
          </div>
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 '></div>

          <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
            <h2 className='font-dmserif text-3xl font-bold text-white mb-2 '> {title}</h2>
            <p className='font-com text-lg italic text-white mb-4 opacity-0 group-hover:opacity-100  transition-opacity  duration-300'>{descricao}</p>
            <div className=' flex justify-between gap-3 mt-2'>
              <button className='font-com  flex justify-between items-center gap-2 rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:bg-teal-800 transition-transform duration-500 '> <GithubLogo size={18} /> Github </button>
              <button className='font-com flex justify-between items-center gap-2   rounded-full shadow shadow-black/60 bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white hover:bg-teal-800  transition-transform duration-500 '> visitar <CaretDoubleRight size={18} /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
