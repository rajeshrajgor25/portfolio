"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight, Sparkles, Figma, ExternalLink } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const featuredProjects = [
  {
    id: "1",
    title: "Ride App Design",
    description:
      "End-to-end UI/UX design for a ride-booking mobile app with booking flow, trip history, and live tracking screens.",
    image: "/Ride app.png",
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=118-444&t=v1dANs1s867NcjhM-1", // Figma link here
  },
  {
    id: "2",
    title: "Fitness App Design",
    description:
      "Modern fitness tracking app design including workout plans, progress tracking, and habit streak screens.",
    image: "/fitness.png",
    techStack: ["Figma", "UI/UX Design", "Interaction Design"],
    figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=541-2610&t=v1dANs1s867NcjhM-1", // Figma link here
  },
  {
    id: "3",
    title: "AIML College Branch Website Design",
    description:
      "Website concept for an AIML college branch showcasing courses, faculty, labs, and placement highlights.",
    image: "/Aiml (1).png",
    techStack: ["Figma", "UI/UX Design", "Information Architecture"],
   figmaUrl:
              "https://www.figma.com/proto/6oY1TNBQsANrqB0rU4MhcN/HMI?node-id=286-183&t=ONe4lVBHtkbSWePP-1", // Figma link here
  },
]

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <motion.div
          className="max-w-4xl w-full text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium flex items-center gap-2 border border-primary/20">
              <Sparkles size={16} />
              Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Rajesh
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/70 mb-4 font-light">
            AIML Student | UI/UX Designer | Creative Developer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I blend AI/ML expertise with creative design and development to build beautiful, intelligent digital
            experiences. Currently studying at Dwarkadas J. Sanghvi College of Engineering.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex justify-center"
          >
            <div className="text-foreground/40 text-sm">Scroll to explore</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Skills</h2>
            <p className="text-foreground/60 text-lg">Expertise across multiple domains</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Machine Learning",
                description: "Building intelligent systems with TensorFlow, PyTorch, and modern ML frameworks.",
                icon: "🤖",
              },
              {
                title: "UI/UX Design",
                description: "Creating beautiful, user-centered designs with Figma and design thinking.",
                icon: "🎨",
              },
              {
                title: "Full-Stack Development",
                description: "Developing responsive web applications with modern tech stacks.",
                icon: "💻",
              },
            ].map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{skill.icon}</div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-foreground/60">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-foreground/60 text-lg">Showcasing my latest work and achievements</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
                whileHover={{ y: -8 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48 bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-foreground/60 text-sm mb-4">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, tidx) => (
                      <span
                        key={tidx}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.figmaUrl && (
                      <motion.a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Figma size={16} />
                        Figma
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/projects">
              <motion.button
                className="px-8 py-3 bg-primary/10 text-primary border border-primary rounded-lg font-semibold flex items-center gap-2 group mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Projects
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
