import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import DeploymentProcess from '@/components/DeploymentProcess';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TerminalEasterEgg from '@/components/TerminalEasterEgg';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div className="gradient-bg" />
      <Head>
        <title>Thimpu Sengyung — Software Engineer & DevOps</title>
        <meta
          name="description"
          content="Portfolio of Thimpu Sengyung — Software Engineer, Full Stack Developer & DevOps Engineer. Building scalable systems, cloud infrastructure, and AI-powered products."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Thimpu Sengyung — Software Engineer & DevOps" />
        <meta property="og:description" content="Building scalable systems, cloud infrastructure, and AI-powered products." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thimpu Sengyung — Software Engineer & DevOps" />
        <meta name="twitter:description" content="Building scalable systems, cloud infrastructure, and AI-powered products." />
        <meta name="twitter:image" content="/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Thimpu Sengyung",
              "jobTitle": "Software Engineer & DevOps Engineer",
              "url": "https://developerthimpu.online",
              "sameAs": [
                "https://github.com/thimpu-create",
                "https://linkedin.com/in/thimpu-sengyung-a00614260",
              ],
            }),
          }}
        />
      </Head>

      <Header />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <DeploymentProcess />
        <Contact />
        <TerminalEasterEgg />
      </main>

      <Footer />
    </div>
  );
}