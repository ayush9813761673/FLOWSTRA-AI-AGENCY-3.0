import React from "react";
import { motion } from "motion/react";
import { fadeUp, stagger } from "../constants";
import { Instagram, Linkedin } from "lucide-react";
import {
  CardHoverReveal,
  CardHoverRevealMain,
  CardHoverRevealContent,
} from "./ui/reveal-on-hover";
import { GradientCard } from "./ui/gradient-card-showcase";

const cardGradients = [
  { from: "#ffbc00", to: "#ff0058" },
  { from: "#03a9f4", to: "#ff0058" },
  { from: "#4dff03", to: "#00d0ff" },
];

const team = [
  {
    image: "/AYUSH YADAV.png",
    name: "Ayush Yadav",
    role: "Co-Founder & CEO",
    bio: "5+ years architecting AI solutions and automation strategies for enterprise growth.",
    instagram: "https://www.instagram.com/ayush.yadav.ai/",
    linkedin: "https://www.linkedin.com/in/ayush-yadav-pro/",
  },
  {
    image: "/Piyush Yadav.png",
    name: "Piyush Yadav",
    role: "Co-Founder & COO",
    bio: "5+ years streamlining business operations, scaling execution frameworks, and driving sustainable client growth.",
    instagram: "https://www.instagram.com/piyush.yadav.ai/",
  },
  {
    image: "/Lavish Sharma.jpeg",
    name: "Lavish Sharma",
    role: "Outreach & Email Specialist",
    bio: "5+ years orchestrating scalable operations and high-converting outreach systems.",
    instagram: "https://www.instagram.com/lavish_sh30/",
  },
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-col gap-16"
      >
        <div className="flex flex-col gap-4 max-w-3xl items-center text-center mx-auto">
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--text-primary)]"
          >
            Meet Our Team!
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-[var(--text-secondary)]"
          >
            The brilliant minds behind Nepal's most innovative AI lead
            generation solutions
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-12 w-full px-4 md:px-0">
          {team.map((member, idx) => {
            const grad = cardGradients[idx % cardGradients.length];
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="h-[32rem] min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px]"
              >
                <GradientCard
                  gradientFrom={grad.from}
                  gradientTo={grad.to}
                  className="h-full w-full"
                >
                  <CardHoverReveal className="h-full w-full rounded-2xl bg-[#111]">
                    <CardHoverRevealMain className="relative h-full w-full">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="inline-block size-full max-h-full max-w-full object-cover align-middle object-top"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                      <div className="absolute bottom-6 left-6 right-6 pointer-events-auto">
                        <h3 className="text-3xl font-bold text-white drop-shadow-md">
                          {member.name}
                        </h3>
                        <p className="text-lg font-medium text-[var(--accent-blue)] drop-shadow-md mt-1">
                          {member.role}
                        </p>
                      </div>
                    </CardHoverRevealMain>

                    <CardHoverRevealContent className="space-y-4 rounded-2xl bg-zinc-900/95 text-zinc-50 border border-white/10 w-[calc(100%-3rem)] p-8 pointer-events-auto">
                      <div>
                        <h3 className="text-3xl font-bold text-white">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <p className="text-lg font-medium text-[var(--accent-blue)]">
                            {member.role}
                          </p>
                          {member.instagram && (
                            <a
                              href={member.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-[var(--accent-blue)] transition-colors pointer-events-auto cursor-pointer relative z-50 inline-block"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Instagram className="w-5 h-5" />
                            </a>
                          )}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-[var(--accent-blue)] transition-colors pointer-events-auto cursor-pointer relative z-50 inline-block"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-base text-white/80 leading-relaxed pt-2">
                        {member.bio}
                      </p>
                    </CardHoverRevealContent>
                  </CardHoverReveal>
                </GradientCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
