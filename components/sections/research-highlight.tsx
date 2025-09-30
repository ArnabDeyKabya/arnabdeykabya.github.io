"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen } from "lucide-react"
import { research } from "@/data/research"

export function ResearchHighlight() {
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

    const element = document.getElementById("research-highlight")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="research-highlight" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Research Focus</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
              Exploring the intersection of cybersecurity and machine learning to build more secure AI systems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Thesis Card */}
            <Card className={`${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <Badge variant="secondary">{research.thesis.status}</Badge>
                </div>
                <CardTitle className="text-xl">{research.thesis.title}</CardTitle>
                <CardDescription className="text-base">{research.thesis.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{research.thesis.year}</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/research">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Research Interests */}
            <div className={`space-y-6 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
              <h3 className="text-2xl font-semibold">Research Interests</h3>
              <div className="space-y-4">
                {research.interests.slice(0, 2).map((interest, index) => (
                  <div
                    key={interest.area}
                    className={`${isVisible ? `animate-fade-in-up animate-delay-${(index + 1) * 100}` : "opacity-0"}`}
                  >
                    <h4 className="font-semibold text-primary mb-2">{interest.area}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{interest.description}</p>
                  </div>
                ))}
              </div>
              <Button asChild variant="ghost" className="group">
                <Link href="/research">
                  View All Research Areas
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
