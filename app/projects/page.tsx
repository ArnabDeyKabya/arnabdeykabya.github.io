"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { projects } from "@/data/projects"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"

const allTechStack = Array.from(new Set(projects.flatMap((project) => project.techStack))).sort()

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects =
    selectedTech.length > 0
      ? projects.filter((project) => selectedTech.some((tech) => project.techStack.includes(tech)))
      : projects

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const clearFilters = () => setSelectedTech([])

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:scale-105 transition-transform inline-block">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects showcasing my expertise in full-stack development, machine learning, and embedded
            systems
          </p>
        </motion.div>

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <Filter className="h-4 w-4" />
              Filter by Technology
            </Button>
            {selectedTech.length > 0 && (
              <Button variant="ghost" onClick={clearFilters} className="hover:scale-105 transition-transform">
                Clear Filters ({selectedTech.length})
              </Button>
            )}
          </div>

          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="flex flex-wrap gap-2 p-4 bg-muted/50 rounded-lg"
            >
              {allTechStack.map((tech) => (
                <Badge
                  key={tech}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  className="cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full flex flex-col hover:shadow-2xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden group">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 text-balance group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">{project.summary}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="ml-2 shrink-0 group-hover:scale-110 transition-transform">
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start hover:text-foreground transition-colors">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover:bg-primary/10 hover:scale-110 transition-all cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 mt-auto">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 bg-transparent hover:scale-105 transition-transform"
                      asChild
                    >
                      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demoUrl && (
                      <Button size="sm" className="flex-1 hover:scale-105 transition-transform" asChild>
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
            <p className="text-muted-foreground">No projects found with the selected technologies.</p>
            <Button
              variant="outline"
              onClick={clearFilters}
              className="mt-4 bg-transparent hover:scale-105 transition-transform"
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4">
              <div className="text-2xl font-bold text-primary">{projects.length}</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary">{allTechStack.length}</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Years Active</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-primary">7</div>
              <div className="text-sm text-muted-foreground">Domains</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
