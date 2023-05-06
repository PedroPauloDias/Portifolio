import React, { useState, useEffect } from 'react'
import { CardProject } from '../CardProjects'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='bg-neutral-800'>
      <h1 className='text-4xl text-white text-center pt-3 ' >Meus Projetos </h1>
      <div className=' w-full  p-5'>
        <ul className='m-2 ' >
          <Slider {...settings}>
            {projetos.map((item) => (
              <li key={item.id} className=' p-4 list-none '>
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
          </Slider>
        </ul>
      </div>
    </div>
  )
}
