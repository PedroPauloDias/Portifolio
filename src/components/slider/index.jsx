
import React, { useState, useEffect, Children } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Info } from "../sections/info";

export const MySlider = ({ children }) => {

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
    slidesToShow: 2,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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


    <div className="p-4  ">      
        <Slider {...settings}>
          {Children}
        </Slider>      
    </div>


  );
}