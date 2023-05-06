'use client'
import { Header } from "@/components/Header";
import { Navbar } from "@/components/navbar";
import { Sections } from "@/components/sections";
import { Projects } from './../components/projects/index';
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>      
      <Navbar/>
      <Header />         
      <Sections />
      <Projects />
      <Footer/>
    </main>
  );
}
