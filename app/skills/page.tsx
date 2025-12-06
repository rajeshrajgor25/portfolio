"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "AI & Machine Learning",
    description: "Building intelligent systems and models",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Data Analysis"],
    icon: "🤖",
  },
  {
    title: "Design & Creative",
    description: "Crafting beautiful and intuitive experiences",
    skills: ["Figma", "UI/UX Design", "Canva", "Prototyping", "Wireframing", "Brand Design"],
    icon: "🎨",
  },
  {
    title: "Web Development",
    description: "Building responsive and performant applications",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    icon: "💻",
  },
  {
    title: "Marketing & Strategy",
    description: "Driving engagement and growth",
    skills: [
      "Social Media Marketing",
      "Content Strategy",
      "Analytics",
      "Campaign Planning",
      "Copywriting",
      "Growth Hacking",
    ],
    icon: "📱",
  },
]

export default function Skills() {
  return (
    <main className="pt-20 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-foreground/60 text-lg">Master of multiple disciplines</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
              <p className="text-foreground/60 mb-6">{category.description}</p>

              <div className="space-y-3">
                {category.skills.map((skill, sidx) => (
                  <motion.div
                    key={sidx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: sidx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground/80">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
