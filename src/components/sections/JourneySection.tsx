"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, Cpu } from "lucide-react";

export function JourneySection() {
  const stats = [
    { label: "Experience", value: "15+ Years" },
    { label: "Project Delivery", value: "150+ High-Impact" },
    { label: "Core Stack", value: "React / Next.js / TS" },
    { label: "Architecture", value: "Firebase / Node.js" },
  ];

  const milestones = [
    {
      year: "2009",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      title: "Computer Hardware & Desktop Engineering",
      institution: "EDIC Institute of Computer Science & Technology",
      description: "Began my career by earning diplomas in Desktop Publishing and Desktop Engineering, establishing a solid foundation in computer architectures, hardware diagnostics, and design systems."
    },
    {
      year: "2020",
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "Digital Strategy & Marketing",
      institution: "Shaw Academy",
      description: "Obtained a Professional Diploma in Digital Marketing, expanding my skill set to understand product positioning, user acquisition channels, and analytical growth strategies."
    },
    {
      year: "2022 - 2023",
      icon: <Award className="w-5 h-5 text-primary" />,
      title: "Google IT Support Professional Certificate",
      institution: "Google & Coursera",
      description: "Earned the Google IT Support Professional Certificate, mastering troubleshooting, user support, networking, operating systems, system administration, and security foundations to manage and resolve complex technical issues."
    },
    {
      year: "2024 - Present",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      title: "Landed in Frontend Development",
      institution: "Modern Web Architectures",
      description: "Officially pivoted to frontend engineering, blending years of deep systems knowledge with React, Next.js, and Tailwind CSS to design elegant, scalable, and responsive user interfaces."
    }
  ];

  return (
    <div className="space-y-20 relative z-10">
      {/* Overview Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0.8, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-xl md:text-3xl font-medium leading-tight text-white font-sans">
            My tech journey started in <span className="text-primary font-semibold">2009</span> with desktop publishing and hardware engineering, evolving into professional IT support. In <span className="text-primary font-semibold">2024</span>, I transitioned into frontend development to build beautiful, customer-centric interfaces.
          </p>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-justify">
            <p>
              Equipped with certifications in Google IT Support and Digital Marketing, I combine years of system level infrastructure knowledge with modern UI engineering to create highly optimized and scalable digital solutions.
            </p>
          </div>
          <div className="text-lg text-white font-medium border-l-2 border-primary/50 pl-4 py-2 bg-primary/5 rounded-r-lg">
            Transforming complex digital challenges into market-ready solutions.
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.8, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 card-hover group"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-2 group-hover:text-primary transition-colors">
                {stat.label}
              </span>
              <span className="text-xl md:text-2xl font-bold text-white">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Visual Timeline Section */}
      <div className="space-y-10">
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-4">
          <Calendar className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-white">Milestone Timeline</h3>
          <p className="text-sm text-muted-foreground">Trace my growth from 2009 till date.</p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.6, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Dot Indicator */}
              <div className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-[#0c0a0f] border-2 border-white/10 flex items-center justify-center group-hover:border-primary transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground group-hover:bg-primary transition-all duration-300" />
              </div>

              {/* Year Label for Desktop */}
              <div className="hidden md:block absolute -left-32 top-1.5 w-24 text-right font-bold text-primary text-lg">
                {milestone.year}
              </div>

              {/* Timeline Card */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 group-hover:bg-white/[0.03] transition-all duration-300 space-y-3">
                {/* Year Label for Mobile */}
                <span className="inline-block md:hidden px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-1">
                  {milestone.year}
                </span>

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {milestone.icon}
                    </span>
                    {milestone.title}
                  </h4>
                  <span className="text-xs font-medium text-muted-foreground italic">
                    {milestone.institution}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed text-justify">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
