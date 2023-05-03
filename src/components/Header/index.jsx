import React from 'react'


export const Header = () => {
  return ( 
    <div className=' flex justify-center '>
    <div className='w-screen '>
        <video src='https://player.vimeo.com/external/408294427.sd.mp4?s=2de6afd255a1677d68039436057945c7c4b141d4&profile_id=164&oauth2_token_id=57447761' autoPlay loop muted  className='w-full h-full '  />
    </div>
<div className=' w-full h-[190px] absolute flex flex-col items-center justify-center  '>
  <h1 className=' absolute top-24 text-4xl  text-white '>Pedro Dias </h1>
  <h1 className=' absolute top-36 text-xl  text-white'> Front-end</h1>
</div>
   
    </div>

  )
}
