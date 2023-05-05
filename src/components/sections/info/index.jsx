import Image from 'next/image'
import React from 'react'
import kkk from '/public/perfil.jpeg'
import { Button } from '@/components/button'


export const Info = ({title, imagem , alt , descricao}) => {



  return (
    
    <div className='   text-white p-2 '>
      <div  className='mt-12 h-[300px]'>
        <Image src={imagem} alt={alt} width={400}height={450} className=' object-cover w-screen h-full'   />
      </div>
      <div  className='mt-2 text-justify  p-6  bg-teal-700  bg-gradient-to-r from-teal-950'>
        <h2 className='text-2xl mb-4 '> { title}</h2>
        <p>{descricao}</p>
    <Button/>
      </div>
     
      </div>
  )
}
