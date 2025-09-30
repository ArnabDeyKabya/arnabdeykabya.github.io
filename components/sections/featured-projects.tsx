"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { projects } from "@/data/projects"

export function FeaturedProjects() {
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

    const element = document.getElementById("featured-projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const featuredProjects = projects.slice(0, 3)

  return (
    <section id="featured-projects" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              A showcase of my technical expertise across full-stack development, machine learning, and systems
              programming
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className={`group hover:shadow-lg transition-all duration-300 ${
                  isVisible ? `animate-scale-in animate-delay-${index * 100}` : "opacity-0"
                }`}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{project.year}</Badge>
                    <div className="flex gap-2">
                      {project.repoUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.repoUrl} target="_blank">
                            <Github className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                      {project.demoUrl && (
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={project.demoUrl} target="_blank">
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.techStack.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0"}`}>
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/projects">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
