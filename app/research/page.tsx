import type { Metadata } from "next"
import { researchInterests, publications } from "@/data/research"
import { BookOpen, FileText, ExternalLink } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Research | Arnab Dey",
  description: "Research interests and publications in cybersecurity, machine learning, and adversarial AI",
}

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Research</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Exploring the intersection of cybersecurity, machine learning, and next-generation networks
          </p>
        </div>

        {/* Research Interests */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            Research Interests
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {researchInterests.map((interest, index) => (
              <Card
                key={index}
                className="animate-scale-in hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    {interest.area}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed mb-4">{interest.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {interest.topics.map((topic, topicIndex) => (
                      <Badge key={topicIndex} variant="secondary">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
            Publications
          </h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={index}
                className="animate-slide-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge variant={pub.status === "Under Review" ? "secondary" : "default"}>{pub.status}</Badge>
                        <span className="text-sm text-muted-foreground">{pub.venue}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-balance">{pub.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{pub.authors}</p>
                      <ul className="space-y-2 mb-4">
                        {pub.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex gap-3">
                            <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      {pub.link && (
                        <Button variant="outline" size="sm" asChild>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            View Publication
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Thesis */}
        <Card className="mt-12 animate-slide-in-up border-primary/20" style={{ animationDelay: "0.9s" }}>
          <CardHeader>
            <CardTitle className="text-2xl">Bachelor's Thesis (Ongoing)</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-bold mb-4 text-primary">
              Adversarial Machine Learning for Cyber Security: Defense and Detection Mechanisms
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My thesis focuses on developing robust defense mechanisms against adversarial attacks in machine learning
              systems, with specific applications to cybersecurity. The research explores detection techniques for
              backdoor attacks, side-channel vulnerabilities, and methods to improve model interpretability and security
              in production environments.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
