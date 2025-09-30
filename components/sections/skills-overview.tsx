"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { skills } from "@/data/skills"

export function SkillsOverview() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("skills-overview")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    { name: "Languages", skills: skills.languages.slice(0, 6) },
    { name: "Frameworks", skills: skills.frameworks.slice(0, 6) },
    { name: "Databases", skills: skills.databases },
  ]

  return (
    <section id="skills-overview" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Proficient in modern technologies spanning full-stack development, machine learning, and systems
              programming
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.name}
                className={`${isVisible ? `animate-slide-in-left animate-delay-${categoryIndex * 100}` : "opacity-0"}`}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className={`text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default ${
                        isVisible
                          ? `animate-scale-in animate-delay-${categoryIndex * 100 + skillIndex * 50}`
                          : "opacity-0"
                      }`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center mt-16 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"}`}>
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
