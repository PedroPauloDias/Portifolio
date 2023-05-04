import Image from 'next/image'
import React from 'react'
import aboutme from '/public/perfil.jpeg'
import { Button } from '@/components/button'


export const AboutMe = () => {
  return (
    <div className=' mt-80  text-white p-2 '>
      <div  className='mt-12'>
        <Image src={aboutme}  className=' object-cover'  />
      </div>
      <div  className='mt-2 text-justify  p-6  bg-teal-600  bg-gradient-to-r from-teal-900'>
        <h2 className='text-2xl mb-4 '> Sobre mim</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequatur suscipit. Ab, molestias, mollitia saepe amet, porro molestiae ipsa doloremque excepturi ad eos aliquam delectus quam necessitatibus sapiente error possimus.</p>
    <Button/>
      </div>
     
      </div>
  )
}
