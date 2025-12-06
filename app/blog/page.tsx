"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"

const blogPosts = [
  {
    id: "ai-future",
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring how AI is transforming industries and shaping the future of technology.",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "AI & ML",
    image: "/ai-future-tech.png",
    slug: "the-future-of-ai",
  },
  {
    id: "ui-design",
    title: "Modern UI/UX Design Trends 2024",
    excerpt: "Discover the latest design trends and principles that are defining modern digital interfaces.",
    date: "November 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/modern-ui-ux-design-interface.jpg",
    slug: "modern-ui-design-trends",
  },
  {
    id: "web-dev",
    title: "Building Scalable Web Applications",
    excerpt: "Best practices and architectural patterns for building scalable, maintainable web applications.",
    date: "November 5, 2024",
    readTime: "10 min read",
    category: "Development",
    image: "/web-development-scalable-architecture.jpg",
    slug: "scalable-web-applications",
  },
  {
    id: "ml-projects",
    title: "Machine Learning Projects for Beginners",
    excerpt: "A comprehensive guide to getting started with machine learning through practical projects.",
    date: "October 28, 2024",
    readTime: "9 min read",
    category: "AI & ML",
    image: "/machine-learning-beginner-projects.jpg",
    slug: "ml-projects-for-beginners",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function Blog() {
  return (
    <main className="pt-20 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="text-primary" size={32} />
            <h1 className="text-5xl md:text-6xl font-bold">Blog & Insights</h1>
          </div>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Thoughts on AI, design, and web development. Exploring ideas that shape the future of technology.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {blogPosts.map((post, idx) => (
            <motion.div key={post.id} variants={itemVariants} whileHover={{ y: -8 }}>
              <Link href={`/blog/${post.slug}`}>
                <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 cursor-pointer group flex flex-col">
                  {/* Image */}
                  <div className="relative overflow-hidden h-48 bg-muted">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-foreground/60 text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex gap-4 text-xs text-foreground/50">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <motion.div
                        className="text-primary"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 text-center border border-primary/20"
        >
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-foreground/70 mb-6">
            Subscribe to get notified about new blog posts and insights on AI, design, and development.
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}
