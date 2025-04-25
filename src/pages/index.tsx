import { motion } from 'framer-motion';
import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="gradient-bg" />
      <Head>
        <title>Thimpu Sengyung - Full Stack Developer & DevOps Engineer</title>
        <meta name="description" content="Portfolio of Thimpu Sengyung - Full Stack Developer & DevOps Engineer" />
      </Head>
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
