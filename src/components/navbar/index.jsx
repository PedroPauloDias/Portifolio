
import React, { useState } from "react";
import { MobileMenu } from "../mobileMenu";
import {  List  } from "@phosphor-icons/react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  
  const HandlerMenu = ()=> {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-between items-center w-full h-14  z-50  px-4 py-1 sticky top-0 bg-transparent ">
      <div className="text-white font-bold ">Logo</div>
        {
        isOpen === false ?
          <button onClick={HandlerMenu}  
          >
          <List size={32} color="#fff" /> 
          </button>
          :
          <MobileMenu 
          HandlerMenu={HandlerMenu}
          />
        }

    </div>
  );
};
