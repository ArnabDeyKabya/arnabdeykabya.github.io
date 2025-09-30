import type { Metadata } from "next"
import { certificationsData } from "@/data/certifications"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Certifications | Arnab Dey",
  description: "Professional certifications and completed courses",
}

export default function CertificationsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Certifications</h1>
          <p className="text-xl text-muted-foreground text-pretty">Professional certifications and completed courses</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {certificationsData.map((cert, index) => (
            <Card
              key={index}
              className="animate-scale-in hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-balance">{cert.name}</h3>
                    <p className="text-primary font-semibold mb-3">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.description && (
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>
                    )}
                    {cert.skills && cert.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}
                    {cert.credentialUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                          View Credential
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

        {/* Additional Info */}
        <Card className="mt-12 animate-slide-in-up border-primary/20" style={{ animationDelay: "0.5s" }}>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-4">Continuous Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am committed to continuous learning and professional development. These certifications represent my
              dedication to staying current with the latest technologies and best practices in machine learning,
              artificial intelligence, and prompt engineering. I regularly pursue new courses and certifications to
              expand my knowledge and skills in emerging technologies.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
