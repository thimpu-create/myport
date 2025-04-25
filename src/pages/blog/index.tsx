import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    date: "2024-01-15",
    excerpt: "A comprehensive guide to building modern web applications with Next.js framework",
    slug: "getting-started-nextjs",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    readTime: "8 min read",
    tags: ["Next.js", "React", "Web Development"],
    featured: true,
    views: 1520,
    author: {
      name: "Thimpu Sengyung",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: 2,
    title: "The Power of TypeScript",
    date: "2024-01-10",
    excerpt: "Why TypeScript is becoming the standard for large-scale JavaScript applications",
    slug: "power-of-typescript",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80",
    readTime: "5 min read",
    tags: ["TypeScript", "JavaScript"],
    featured: false,
    views: 980,
    author: {
      name: "Thimpu Sengyung",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox",
    date: "2024-01-05",
    excerpt: "Understanding when to use CSS Grid and when to use Flexbox in your layouts",
    slug: "css-grid-vs-flexbox",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80",
    readTime: "6 min read",
    tags: ["CSS", "Web Design"],
    featured: false,
    views: 720,
    author: {
      name: "Thimpu Sengyung",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: 4,
    title: "Web Performance Optimization",
    date: "2023-12-28",
    excerpt: "Essential techniques for improving your website's loading speed and performance",
    slug: "web-performance-optimization",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    readTime: "7 min read",
    tags: ["Performance", "Web Development"],
    featured: false,
    views: 860,
    author: {
      name: "Thimpu Sengyung",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
    }
  },
  {
    id: 5,
    title: "State Management in React",
    date: "2023-12-20",
    excerpt: "Comparing different state management solutions for React applications",
    slug: "react-state-management",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80",
    readTime: "9 min read",
    tags: ["React", "State Management"],
    featured: false,
    views: 640,
    author: {
      name: "Thimpu Sengyung",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=80&h=80"
    }
  }
];

const POSTS_PER_PAGE = 4;

const FeaturedPost = ({ post }) => (
  <article className="col-span-2 bg-gradient-to-br from-gray-800/70 to-gray-900/70 rounded-xl overflow-hidden">
    <Link href={`/blog/${post.slug}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px]">
          <Image 
            src={post.image} 
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-3xl font-bold mb-3">{post.title}</h2>
          <p className="text-gray-300 mb-4">{post.excerpt}</p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Image 
                src={post.author.avatar} 
                alt={post.author.name} 
                width={24} 
                height={24} 
                className="rounded-full"
              />
              <span>{post.author.name}</span>
            </div>
            <span>•</span>
            <time>{post.date}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  </article>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center gap-2 mt-12">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800/70"
    >
      Previous
    </button>
    {[...Array(totalPages)].map((_, i) => (
      <button
        key={i + 1}
        onClick={() => onPageChange(i + 1)}
        className={`w-10 h-10 rounded-lg ${
          currentPage === i + 1
            ? 'bg-blue-500/20 text-blue-300'
            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800/70'
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800/70"
    >
      Next
    </button>
  </div>
);

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const featuredPost = blogPosts.find(post => post.featured);
  const mostRead = blogPosts.sort((a, b) => b.views - a.views).slice(0, 3);
  
  // Pagination logic
  const sortedPosts = blogPosts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen relative">
      <div className="gradient-bg" />
      <Head>
        <title>Blog - Thimpu Sengyung</title>
        <meta name="description" content="Blog posts by Thimpu Sengyung" />
      </Head>
      
      <Header />
      
      <main className="relative z-10 container mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400">Thoughts on software development, web technologies, and more.</p>
        </div>

        {featuredPost && <FeaturedPost post={featuredPost} />}

        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Most Read</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mostRead.map(post => (
              <article key={post.id} className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-sm text-gray-400">{post.readTime}</span>
                      <span className="text-gray-500">•</span>
                      <span className="text-sm text-gray-400">{post.views} views</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">All Posts</h2>
            <p className="text-gray-400">
              Page {currentPage} of {totalPages}
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {paginatedPosts.map(post => (
              <article key={post.id} className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/70 transition">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex gap-6">
                    <div className="relative w-32 h-32 flex-shrink-0">
                      <Image src={post.image} alt={post.title} fill className="object-cover rounded-lg" />
                    </div>
                    <div>
                      <div className="flex gap-2 mb-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full text-xs">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-400">
                        <time>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
