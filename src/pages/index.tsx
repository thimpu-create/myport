import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import Work from '@/components/Work';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TerminalEasterEgg from '@/components/TerminalEasterEgg';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Head>
        <title>Thimpu Sengyung — Software Engineer, DevOps &amp; AI-Native Builder</title>
        <meta
          name="description"
          content="Portfolio of Thimpu Sengyung — Software Engineer, Technical Officer at Jal Jeevan Mission (JJM) Assam, and AI-Native Builder behind JJM Brain HRMS, JJM Brain (RAG + MCP), and OnlineCRM."
        />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="Thimpu Sengyung — Software Engineer, DevOps & AI-Native Builder" />
        <meta
          property="og:description"
          content="Building government-compliant HRMS infrastructure (JJM Assam), AI-native RAG/MCP systems, and full-stack cloud platforms."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Thimpu Sengyung — Software Engineer, DevOps & AI-Native Builder" />
        <meta
          name="twitter:description"
          content="Government-compliant HRMS (JJM Assam), AI-native engineering, and scalable full-stack systems."
        />
        <meta name="twitter:image" content="/og-image.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Thimpu Sengyung',
              jobTitle: 'Software Engineer & Technical Officer',
              url: 'https://developerthimpu.online',
              sameAs: [
                'https://github.com/thimpu-create',
                'https://linkedin.com/in/thimpu-sengyung-a00614260',
              ],
            }),
          }}
        />
      </Head>

      <Header />

      <main>
        <Hero />
        <Expertise />
        <Work />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <TerminalEasterEgg />
    </div>
  );
}
