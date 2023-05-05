'use client'
import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar";
import { Sections } from "@/components/sections";
export default function Home() {
  return (
    <main>      
      <Navbar/>
      <Header />   
      
      <Sections/>
  
    </main>
  );
}
