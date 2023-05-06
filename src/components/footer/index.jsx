import React from 'react'
import {LinkedinLogo,GithubLogo, FacebookLogo , InstagramLogo,TwitterLogo} from '@phosphor-icons/react'

const Footer = () => {
  return (
    <footer>
      <div className='h-full  flex flex-col items-center justify-center gap-3 text-white bg-gradient-to-b from-neutral-800   via-teal-900 to-teal-950'>
        <div className="mt-20">Logo</div>
        <div className='flex gap-2'>
        <LinkedinLogo size={25} />
          <GithubLogo size={25} />
          <TwitterLogo size={25} />
          <FacebookLogo size={25} />
          <InstagramLogo size={25} />
        </div>
        <div  className="text-xs"> Desenvolvido por Pedro Dias  </div>
        <div  className="mb-16 text-xs"> Todos os Direitos Reservados ©2023 </div>
      </div>
    </footer>
  )
}

export default Footer