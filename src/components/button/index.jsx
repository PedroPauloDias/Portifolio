import React from 'react'
import { CaretRight } from "@phosphor-icons/react";


export const Button = () => {
  return (
    <div className='flex w-32 text-center mt-4 rounded-sm  bg-zinc-200 text-black '>
      <button className='flex items-center justify-around p-1 px-2 text-sm'>
       Saiba mais 
        <CaretRight size={12} className='ml-4' />
      </button>
    </div>
  )
}
