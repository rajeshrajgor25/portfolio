"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Calendar, ArrowLeft, Share2, Clock } from "lucide-react"

const blogContent: Record<string, any> = {
  "the-future-of-ai": {
    title: "The Future of Artificial Intelligence",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "AI & ML",
    image: "/ai-future-tech.png",
    author: "Rajesh Rajgor",
    excerpt:
      "Exploring how AI is transforming industries and shaping the future of technology with groundbreaking innovations.",
    content: `
      <p>Artificial Intelligence has become one of the most transformative technologies of our time. From machine learning to deep neural networks, AI is revolutionizing how we work, create, and solve problems.</p>

      <h2>Current State of AI</h2>
      <p>Today's AI systems can process massive amounts of data, recognize patterns, and make predictions with unprecedented accuracy. Large language models, computer vision systems, and reinforcement learning algorithms are pushing the boundaries of what's possible.</p>

      <h2>Key Trends Shaping AI's Future</h2>
      <p>Several trends are defining the future of artificial intelligence:</p>
      <ul>
        <li><strong>Generative AI:</strong> Creating new content, code, and designs from learned patterns</li>
        <li><strong>Edge Computing:</strong> Running AI models directly on devices for privacy and speed</li>
        <li><strong>Explainable AI:</strong> Making AI decisions transparent and interpretable</li>
        <li><strong>Multimodal AI:</strong> Systems that can process text, images, audio, and video together</li>
      </ul>

      <h2>Challenges Ahead</h2>
      <p>Despite the remarkable progress, we face challenges including ethical concerns, bias in training data, energy consumption, and the need for responsible AI development. Ensuring AI benefits all of humanity while minimizing risks is crucial.</p>

      <h2>Conclusion</h2>
      <p>The future of AI is incredibly exciting. As we continue to innovate responsibly, AI will unlock new possibilities and help us solve some of humanity's greatest challenges.</p>
    `,
  },
  "modern-ui-design-trends": {
    title: "Modern UI/UX Design Trends 2024",
    date: "November 10, 2024",
    readTime: "6 min read",
    category: "Design",
    image: "/modern-ui-ux-design-interface.jpg",
    author: "Rajesh Rajgor",
    excerpt: "Discover the latest design trends and principles that are defining modern digital interfaces in 2024.",
    content: `
      <p>UI/UX design is constantly evolving, with new trends and technologies reshaping how we design digital experiences. Let's explore the key design trends that are dominating 2024.</p>

      <h2>Minimalism and Whitespace</h2>
      <p>Clean, minimalist design continues to dominate. By leveraging whitespace effectively, designers create interfaces that are not only visually appealing but also improve user focus and readability.</p>

      <h2>Dark Mode Everything</h2>
      <p>Dark mode is no longer an option—it's a necessity. Users appreciate the reduced eye strain and battery savings, and designers are creating sophisticated dark mode experiences that are just as beautiful as light modes.</p>

      <h2>Micro-interactions and Animation</h2>
      <p>Subtle animations and micro-interactions enhance user experience by providing feedback and guiding user attention. From hover effects to loading states, motion design is crucial in modern interfaces.</p>

      <h2>Typography as a Hero Element</h2>
      <p>Bold, expressive typography is becoming a focal point in design. Designers are using variable fonts and creative typography to create memorable brand experiences.</p>

      <h2>Accessibility First</h2>
      <p>Accessibility is no longer an afterthought. Modern design prioritizes WCAG compliance, inclusive color palettes, and keyboard navigation from the start.</p>
    `,
  },
  "scalable-web-applications": {
    title: "Building Scalable Web Applications",
    date: "November 5, 2024",
    readTime: "10 min read",
    category: "Development",
    image: "/web-development-scalable-architecture.jpg",
    author: "Rajesh Rajgor",
    excerpt: "Best practices and architectural patterns for building scalable, maintainable web applications.",
    content: `
      <p>Building scalable web applications is both an art and a science. It requires careful planning, architectural decisions, and continuous optimization to ensure your application can handle growth.</p>

      <h2>Component-Based Architecture</h2>
      <p>Breaking your application into reusable, composable components makes your code more maintainable and testable. This approach allows different teams to work independently and scale development efforts.</p>

      <h2>State Management</h2>
      <p>Choosing the right state management solution is critical. Whether it's Redux, Context API, or other solutions, proper state management ensures predictable data flow and easier debugging.</p>

      <h2>API Design</h2>
      <p>Well-designed APIs are the backbone of scalable applications. RESTful principles, versioning strategies, and proper error handling ensure your APIs can evolve without breaking client applications.</p>

      <h2>Database Optimization</h2>
      <p>Efficient database queries, proper indexing, and caching strategies are essential for performance. Consider denormalization where appropriate and use database replication for reliability.</p>

      <h2>Performance Monitoring</h2>
      <p>You can't improve what you don't measure. Implement comprehensive monitoring and logging to identify bottlenecks and optimize your application continuously.</p>
    `,
  },
  "ml-projects-for-beginners": {
    title: "Machine Learning Projects for Beginners",
    date: "October 28, 2024",
    readTime: "9 min read",
    category: "AI & ML",
    image: "/machine-learning-beginner-projects.jpg",
    author: "Rajesh Rajgor",
    excerpt: "A comprehensive guide to getting started with machine learning through practical projects.",
    content: `
      <p>Getting started with machine learning can be overwhelming, but with the right projects and guidance, you can build a strong foundation quickly. Let's explore beginner-friendly ML projects.</p>

      <h2>Project 1: Iris Classification</h2>
      <p>The Iris dataset is the perfect starting point. You'll learn classification basics, feature scaling, and model evaluation. It's small, well-documented, and perfect for understanding fundamental ML concepts.</p>

      <h2>Project 2: Housing Price Prediction</h2>
      <p>Regression is another fundamental concept. Predict housing prices using features like location, size, and amenities. This teaches you about linear relationships and model fitting.</p>

      <h2>Project 3: Image Classification with CNNs</h2>
      <p>Dive into deep learning with the MNIST dataset. Building a Convolutional Neural Network for handwritten digit recognition introduces you to neural networks and computer vision.</p>

      <h2>Project 4: Sentiment Analysis</h2>
      <p>Natural language processing is fascinating. Analyze text sentiment using techniques from bag-of-words to embeddings. This opens doors to NLP applications.</p>

      <h2>Learning Resources</h2>
      <p>Start with libraries like scikit-learn, TensorFlow, and PyTorch. Online platforms offer free courses, and Kaggle provides datasets and competitions to practice with.</p>
    `,
  },
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogContent[slug]

  if (!post) {
    return (
      <main className="pt-20 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link href="/blog">
            <motion.button
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Back to Blog
            </motion.button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen py-12">
      <article className="max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all mb-12">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              {post.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{post.title}</h1>

          <p className="text-xl text-foreground/70 mb-8">{post.excerpt}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 py-6 border-b border-border">
            <div className="flex items-center gap-2 text-foreground/60">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground/60">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
            <div className="ml-auto">
              <motion.button
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="my-12"
        >
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full rounded-xl object-cover h-96"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="prose prose-invert max-w-none mb-16"
        >
          <div
            className="text-foreground/80 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-xl p-8 mb-12"
        >
          <h3 className="text-xl font-bold mb-2">About the Author</h3>
          <p className="text-foreground/70">
            {post.author} is an AIML student, UI/UX designer, and creative developer passionate about building beautiful
            digital experiences and exploring the possibilities of artificial intelligence.
          </p>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8">More Articles</h2>
          <Link href="/blog">
            <motion.button
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Posts
            </motion.button>
          </Link>
        </motion.div>
      </article>
    </main>
  )
}
