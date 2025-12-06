export async function GET() {
  // Mock data - replace with database query
  const projects = [
    {
    id: "1",
    title: "Ride App Design",
    description: "End-to-end UI/UX design for a ride-booking mobile app with booking flow, trip history, and live tracking screens.",
    image: "/Ride app.png", // update with your image path
    techStack: ["Figma", "UI/UX Design", "Prototyping"],
    figmaUrl: "#",
    demoUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=118-444&t=v1dANs1s867NcjhM-1", // Figma link here
  },
  {
    id: "2",
    title: "Fitness App Design",
    description: "Modern fitness tracking app design including workout plans, progress tracking, and habit streak screens.",
    image: "/fitness.png",
    techStack: ["Figma", "UI/UX Design", "Interaction Design"],
    figmaUrl: "#",
    demoUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=541-2610&t=v1dANs1s867NcjhM-1", // Figma link here
  },
  {
    id: "3",
    title: "Travel Landing Page Design",
    description: "Hero-focused travel landing page with destination highlights, offers, and call-to-action sections.",
    image: "/travel.jpg",
    techStack: ["Figma", "Landing Page Design", "Visual Design"],
    figmaUrl: "https://www.figma.com/proto/cJ0A0QAgg1RCnb008Ue05a/Travel?node-id=3-2&t=v1dANs1s867NcjhM-1",
  },
  {
    id: "4",
    title: "AIML College Branch Website Design",
    description: "Website concept for an AIML college branch showcasing courses, faculty, labs, and placement highlights.",
    image: "/Aiml (1).png",
    techStack: ["Figma", "UI/UX Design", "Information Architecture"],
    figmaUrl: "https://www.figma.com/proto/6oY1TNBQsANrqB0rU4MhcN/HMI?node-id=286-183&t=ONe4lVBHtkbSWePP-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=286%3A183",
  },
  {
    id: "5",
    title: "Home-made E-commerce Design",
    description: "E-commerce UI for home-made products with product cards, category filters, and smooth checkout flow.",
    image: "/Aiml (2).png",
    techStack: ["Figma", "E-commerce UX", "UI Design"],
    figmaUrl: "https://www.figma.com/proto/6oY1TNBQsANrqB0rU4MhcN/HMI?node-id=583-357&t=Z3TjPrl7bUdyZb9i-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=286%3A183",

  },
  {
    id: "6",
    title: "BMW Landing Page",
    description: "Premium automotive landing page for BMW with hero banner, model highlights, and booking section.",
    image: "/bmw.jpg",
    techStack: ["Figma", "UI Design", "Brand-focused Design"],
    figmaUrl: "https://www.figma.com/proto/KcMs7aHjnKJ8KwRQBiZvOo/BMW-M?node-id=1-2&t=v1dANs1s867NcjhM-1",
    
  },
  {
    id: "7",
    title: "Music Landing Page",
    description: "Music streaming landing page with artist highlights, playlists, and subscription CTAs.",
    image: "/music.jpg",
    techStack: ["Figma", "UI/UX Design", "Visual Design"],
    figmaUrl: "https://www.figma.com/proto/dlTR9HGm0uWdUvi2K2jEFB/Rajesh-UI-UX-project?node-id=300-1623&t=v1dANs1s867NcjhM-1",
    
  },
  ]

  return Response.json(projects)
}

export async function POST(request: Request) {
  const data = await request.json()

  // Mock: return the created project
  return Response.json(
    {
      id: Math.random().toString(36),
      ...data,
    },
    { status: 201 },
  )
}
