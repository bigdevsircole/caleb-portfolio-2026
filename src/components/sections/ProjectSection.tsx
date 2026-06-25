"use client";

const projects = [
  {
    id: "1",
    title: "Caleb Bank",
    category: "Mobile Banking Dashboard",
    image: "https://drive.google.com/file/d/1KV1aWxu5NMYZ2t_znz-jt25_zONN4KEN/view?usp=drive_link",
    link: "https://mobile-banking-dashboard.vercel.app/",
    description: "A modern mobile banking dashboard featuring high-fidelity interactive charts, real-time transaction tracking, and customizable financial widgets. Designed with a clean glassmorphic interface to elevate the digital banking experience.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts", "TypeScript"],
    year: "2026",
    role: "Engineering & Design",
  },
  {
    id: "2",
    title: "BraveCard",
    category: "Digital Identity Platform",
    image: "https://drive.google.com/uc?id=1KJ9Ryf1-12xYSfPeLfs-V1U_vZrt49Bp",
    link: "https://bravecard.vercel.app/",
    description: "A secure digital identity platform that allows users to create, manage, and share verified professional credentials. Built with decentralized authentication protocols and robust cryptographic verification steps.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Web3Auth"],
    year: "2025",
    role: "Fullstack Engineering",
  },
  {
    id: "3",
    title: "Berrybby",
    category: "E-commerce",
    image: "https://picsum.photos/seed/125/600/400",
    link: "https://berrybby.vercel.app/",
    description: "An immersive, highly-responsive e-commerce application for curated design objects. Features a seamless cart workflow, dynamic product filtering, and a custom checkout pipeline integrated with Stripe.",
    tech: ["Next.js", "Tailwind CSS", "Stripe API", "Redux Toolkit"],
    year: "2025",
    role: "Frontend Engineering",
  },
  {
    id: "4",
    title: "WA Direct Message",
    category: "WhatsApp Messaging App",
    image: "https://drive.google.com/uc?id=1eGJj52zs5YDj0AOb_n_VD1dHLi5PdMTk",
    link: "https://whatsapp-msg-one.vercel.app/",
    description: "A productivity micro-utility that enables instant WhatsApp messaging without the hassle of saving contact numbers. Designed for professionals who require swift communication workflows.",
    tech: ["React", "Vite", "Tailwind CSS", "WhatsApp API"],
    year: "2025",
    role: "Development & Design",
  },
  {
    id: "5",
    title: "Orion Manager",
    category: "Privacy Control App",
    image: "https://drive.google.com/uc?id=1DRGMrL240DavTmIrQXSY6tTNntsmu3vd",
    link: "https://orion-manager.vercel.app/",
    description: "An intuitive privacy control and application management console that allows users to monitor data sharing, toggle security permissions, and audit local application behaviors in real-time.",
    tech: ["Electron", "React", "TypeScript", "Tailwind CSS"],
    year: "2025",
    role: "Security & Frontend",
  },
  {
    id: "6",
    title: "Rhoda Delight",
    category: "Food Website",
    image: "https://drive.google.com/uc?id=1m9b6r36mGA3CZQqZ2n8ZIv3LpoetbUd5",
    link: "#",
    description: "A premium, visually-rich culinary web experience for a high-end gourmet brand. Includes reservation booking, seasonal menu showcases, and an administrative dashboard for order management.",
    tech: ["Next.js", "Prismic CMS", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    role: "Fullstack Engineering",
  },
  {
    id: "7",
    title: "Bàtà Gidi",
    category: "Hand-Crafted Footwear",
    image: "https://drive.google.com/uc?id=1vCn9CfDnAZKcu3UuBqTiN12ejFbWEQ6x",
    link: "https://bata-gidi.vercel.app/",
    description: "A luxury e-commerce experience celebrating hand-crafted footwear. Integrates a 3D previewer, detailed artisan storytelling, and fluid transitions to mirror the premium tactile quality of the shoes.",
    tech: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    role: "Design & Engineering",
  },
  {
    id: "8",
    title: "QR Code Generator",
    category: "QR Generator App",
    image: "https://drive.google.com/uc?id=1qxZD9osYwhJ5fC-dxvuWlzYyTy5f95mh",
    link: "https://qr-code-by-caleb-yinusa.vercel.app/",
    description: "A versatile utility for generating, styling, and tracking dynamic QR codes. Allows businesses to customize branding, embed logos, and view basic scan analytics through a minimal dashboard.",
    tech: ["React", "Vite", "Tailwind CSS", "Canvas API"],
    year: "2024",
    role: "Frontend Engineering",
  },
  {
    id: "9",
    title: "Shinar 930",
    category: "Portfolio",
    image: "https://drive.google.com/uc?id=1Rz85uKtStAOL4HCMvMYxuQmGMEWICvst",
    link: "https://shinar930.vercel.app/",
    description: "A highly conceptual portfolio experience inspired by brutalist architecture and mathematical grids. Features horizontal scrolling, page transition animations, and dark-mode micro-interactions.",
    tech: ["Vite", "HTML5", "Vanilla JS", "GSAP", "Sass"],
    year: "2023",
    role: "Creative Direction",
  },
  {
    id: "10",
    title: "DevSearch Engine",
    category: "Unified Developer Search Tool",
    image: "https://api.microlink.io/?url=https://devsearchengine.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://devsearchengine.vercel.app",
    description: "A unified, high-performance search engine designed specifically for software developers. Aggregates documentation, GitHub repositories, and StackOverflow solutions into a single keyboard-navigable view.",
    tech: ["Next.js", "Elasticsearch", "Tailwind CSS", "AlgoSeek"],
    year: "2026",
    role: "Fullstack Engineering",
  },
  {
    id: "11",
    title: "Baps Car Tracker",
    category: "Vehicle Tracking Platform",
    image: "https://api.microlink.io/?url=https://bapscartracker.web.app&screenshot=true&meta=false&embed=screenshot.url",
    link: "https://bapscartracker.web.app/",
    description: "A real-time vehicle telematics and tracking platform. Consumes live GPS data feeds, calculates optimal routes, and triggers automated geofencing alerts for fleet logistics managers.",
    tech: ["React", "Firebase", "Google Maps API", "Node.js", "WebSockets"],
    year: "2025",
    role: "IoT & Fullstack",
  },
];

export function ProjectSection() {

  return (
    <div className="relative z-10 w-full select-none">
      {/* SECTION HEADER */}
      <div className="w-full border-t border-white/10 pt-12 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Monospace index column */}
          <div className="md:col-span-3 flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              SELECTED WORK
            </span>
          </div>

          {/* Large Serif Heading & Description */}
          <div className="md:col-span-9">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-normal leading-[1.15] text-white tracking-tight mb-6">
              Eight things I've shipped.<br />
              <span className="italic text-white/50 font-light">the rest is under NDA.</span>
            </h2>
            <p className="text-sm md:text-base text-muted-foreground font-light max-w-xl leading-relaxed">
              A small, honest cross-section of product, tooling, and experiment.
            </p>
          </div>
        </div>
      </div>

      {/* PROJECT TABLE LIST */}
      <div className="w-full border-b border-white/10">
        {projects.map((project, index) => {
          const isExternal = project.link.startsWith('http');
          const projectIndexStr = (index + 1).toString().padStart(2, '0');

          return (
            <a
              key={project.id}
              href={project.link}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group block w-full border-t border-white/10 py-10 md:py-12 transition-all duration-300 hover:bg-white/[0.015] relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4 items-start px-2">
                {/* 1. Index */}
                <div className="col-span-1 md:col-span-1 flex items-center pt-1">
                  <span className="font-mono text-xs md:text-sm text-muted-foreground tracking-widest">
                    {projectIndexStr}
                  </span>
                </div>

                {/* 2. Title */}
                <div className="col-span-11 md:col-span-3">
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-[2.6rem] font-medium leading-none text-white tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                {/* 3. Description & Tech Stack */}
                <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                  <p className="text-sm md:text-[0.95rem] text-muted-foreground leading-relaxed font-light">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] md:text-xs tracking-widest text-muted-foreground/50 uppercase">
                    {project.tech.map((techItem, techIndex) => (
                      <span key={techItem} className="flex items-center">
                        {techIndex > 0 && <span className="mr-2 text-white/10">/</span>}
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4. Year & Role */}
                <div className="col-span-8 md:col-span-2 md:text-right pt-1 flex flex-col">
                  <span className="font-mono text-xs text-white font-medium">
                    {project.year}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mt-1.5">
                    {project.role}
                  </span>
                </div>

                {/* 5. Action Link */}
                <div className="col-span-4 md:col-span-1 md:text-right pt-1 flex items-center md:justify-end gap-1">
                  <span className="font-mono text-xs font-semibold text-white tracking-widest uppercase group-hover:text-primary transition-colors duration-300 flex items-center gap-1">
                    VIEW <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}