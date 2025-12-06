"use client"

import { motion } from "framer-motion"
import { ExternalLink, Figma } from "lucide-react"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  techStack: string[]
  figmaUrl?: string
  demoUrl?: string
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data)
        setLoading(false)
      })
      .catch(() => {
        setProjects([
          {
            id: "1",
            title: "Ride App Design",
            description: "End-to-end UI/UX design for a ride-booking mobile app.",
            image: "/Ride app.png",
            techStack: ["Figma", "UI/UX Design", "Prototyping"],
            figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=118-444&t=v1dANs1s867NcjhM-1",
          },
          {
            id: "2",
            title: "Fitness App Design",
            description: "Workout & habit tracking fitness app UI.",
            image: "/fitness.png",
            techStack: ["Figma", "UI/UX Design", "Interaction Design"],
            figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=541-2610&t=v1dANs1s867NcjhM-1",
          },
          {
            id: "3",
            title: "Travel Landing Page Design",
            description: "Travel website landing page concept.",
            image: "/travel.jpg",
            techStack: ["Figma", "Landing Page Design", "Visual Design"],
            figmaUrl: "https://www.figma.com/proto/cJ0A0QAgg1RCnb008Ue05a/Travel?node-id=3-2&t=v1dANs1s867NcjhM-1",
          },
          {
            id: "4",
            title: "AIML College Branch Website Design",
            description: "AIML branch showcase website design.",
            image: "/Aiml (1).png",
            techStack: ["Figma", "UI/UX Design", "Information Architecture"],
            figmaUrl:
              "https://www.figma.com/proto/6oY1TNBQsANrqB0rU4MhcN/HMI?node-id=286-183&t=ONe4lVBHtkbSWePP-1",
          },
          {
            id: "5",
            title: "Home-made E-commerce Design",
            description: "Minimalistic homemade products e-commerce UI.",
            image: "/Aiml (2).png",
            techStack: ["Figma", "E-commerce UX", "UI Design"],
            figmaUrl: "https://www.figma.com/proto/6oY1TNBQsANrqB0rU4MhcN/HMI?node-id=583-357&t=Z3TjPrl7bUdyZb9i-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=286%3A183",
          },
          {
            id: "6",
            title: "BMW Landing Page",
            description: "Luxury automotive brand landing page.",
            image: "/bmw.jpg",
            techStack: ["Figma", "UI Design", "Brand-Focused Design"],
            figmaUrl: "https://www.figma.com/proto/KcMs7aHjnKJ8KwRQBiZvOo/BMW-M?node-id=1-2&t=v1dANs1s867NcjhM-1",
          },
          {
            id: "7",
            title: "Music Landing Page",
            description: "Modern music streaming landing page UI.",
            image: "/music.jpg",
            techStack: ["Figma", "UI/UX Design", "Visual Design"],
            figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=300-1623&t=v1dANs1s867NcjhM-1",
          },
        ])
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <main className="pt-20 min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-foreground/60">Loading projects...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">My Projects</h1>
          <p className="text-foreground/60 text-lg">Showcasing my best UI/UX design work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4">{project.description}</p>

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

                {/* Figma Button */}
                <div className="flex gap-3">
                  {project.figmaUrl && (
                    <motion.a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 
                                 text-primary hover:bg-primary hover:text-primary-foreground 
                                 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Figma size={16} />
                      Figma
                    </motion.a>
                  )}

                  {project.demoUrl && (
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-primary 
                                 text-primary hover:bg-primary/10 transition-colors text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                      Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
