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
import DeploymentProcess from '@/components/DeploymentProcess';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="gradient-bg" />
          <Head>
            {/* Basic SEO */}
            <title>Thimpu Sengyung - Full Stack Developer & DevOps Engineer</title>
            <meta
              name="description"
              content="Portfolio of Thimpu Sengyung - Full Stack Developer & DevOps Engineer specializing in modern web development and DevOps solutions."
            />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:title" content="Thimpu Sengyung - Full Stack Developer & DevOps Engineer" />
            <meta
              property="og:description"
              content="Explore my portfolio showcasing projects in full-stack development, cloud, and DevOps."
            />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="/og-image.jpg" /> {/* Replace with your profile/project image */}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Thimpu Sengyung - Full Stack Developer & DevOps Engineer" />
            <meta
              name="twitter:description"
              content="Portfolio showcasing my skills in web development, cloud, and DevOps."
            />
            <meta name="twitter:image" content="/og-image.jpg" />

            {/* Social Profiles */}
            <meta property="og:profile:first_name" content="Thimpu" />
            <meta property="og:profile:last_name" content="Sengyung" />
            <meta property="og:profile:username" content="thimpu-create" />

            {/* Favicons */}
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

            {/* Schema.org JSON-LD */}
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: `
                {
                  "@context": "https://schema.org",
                  "@type": "Person",
                  "name": "Thimpu Sengyung",
                  "jobTitle": "Full Stack Developer & DevOps Engineer",
                  "image": "/og-image.jpg",
                  "sameAs": [
                    "https://github.com/thimpu-create",
                    "https://linkedin.com/in/thimpu-sengyung-a00614260",
                    "https://facebook.com/", 
                    "https://instagram.com/"
                  ]
                }
              `,
              }}
            />
          </Head>
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <DeploymentProcess />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
