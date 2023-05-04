import React from 'react'


export const Header = () => {
  return (
    <div className=' flex justify-center  '>
      <div className='w-screen h-96 absolute top-0'>
   
        <video src='https://player.vimeo.com/external/408294427.sd.mp4?s=2de6afd255a1677d68039436057945c7c4b141d4&profile_id=164&oauth2_token_id=57447761' autoPlay loop muted className='w-full h-full object-cover' />
      </div>
      <div className=' w-screen h-[190px] absolute z-10  flex flex-col items-start justify-center  '>
        <h1 className=' relative  top-28 left-4 text-4xl z-10  text-white '>Pedro Dias </h1>
        <h1 className='relative top-32 left-4  text-2xl z-10 text-white'> Front-end developer</h1>
      </div>

    </div>

  )
