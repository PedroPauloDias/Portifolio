'use client'
import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar";
import { Sections } from "@/components/sections";
import {MySlider} from '@/components/slider'
export default function Home() {
  return (
    <main>      
      <Navbar/>
      <Header />         
      <Sections />
  <MySlider/>
    </main>
  );
}
