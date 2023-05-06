'use client'
import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar";
import { Sections } from "@/components/sections";
import {MySlider} from '@/components/slider'
import { Projects } from './../components/projects/index';
export default function Home() {
  return (
    <main>      
      <Navbar/>
      <Header />         
      <Sections />
      <Projects/>
    </main>
  );
}
