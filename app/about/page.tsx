"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-lg text-foreground/70 leading-relaxed"
        >
          <p>
            I'm Rajesh, an AIML student at{" "}
            <strong className="text-foreground">Dwarkadas J. Sanghvi College of Engineering</strong>, graduating in
            2027. I'm passionate about building intelligent systems that solve real-world problems while maintaining a
            focus on user experience and design.
          </p>

          <p>
            My journey spans three intersecting domains:{" "}
            <strong className="text-foreground">AI and Machine Learning</strong>, where I explore cutting-edge
            algorithms and neural networks; <strong className="text-foreground">UI/UX Design</strong>, where I craft
            intuitive and beautiful interfaces; and <strong className="text-foreground">Full-Stack Development</strong>,
            where I bring ideas to life on the web.
          </p>

          <p>
            I believe technology should be accessible, beautiful, and purposeful. Whether I'm building an ML model,
            designing a user interface, or developing a web application, I approach every project with creativity,
            precision, and a deep commitment to quality.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-xl p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Dwarkadas J. Sanghvi College of Engineering</p>
                <p className="text-foreground/60">B.Tech in Artificial Intelligence & Machine Learning</p>
                <p className="text-foreground/50 text-sm">Expected Graduation: 2027</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h4 className="text-xl font-bold mb-4">Creative Skills</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ UI/UX Design (Figma, Canva)</li>
                <li>✓ Social Media Marketing</li>
                <li>✓ Brand Strategy</li>
                <li>✓ Visual Communication</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h4 className="text-xl font-bold mb-4">Technical Skills</h4>
              <ul className="space-y-2 text-foreground/70">
                <li>✓ Machine Learning & AI</li>
                <li>✓ Web Development (Next.js, React)</li>
                <li>✓ Database Design & SQL</li>
                <li>✓ Cloud & Deployment</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
