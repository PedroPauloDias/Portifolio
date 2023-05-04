'use client'
import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar";
import { AboutMe } from "@/components/sections/aboutMe";
export default function Home() {
  return (
    <main>      
      <Navbar/>
      <Header />   
      <AboutMe/>
  
    </main>
  );
}
