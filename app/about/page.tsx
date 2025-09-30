import type { Metadata } from "next"
import { profileData } from "@/data/profile"
import { educationData } from "@/data/academics"
import { awardsData } from "@/data/academics"
import { Calendar, MapPin, Award, GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "About | Arnab Dey",
  description:
    "Learn more about Arnab Dey - Computer Science student specializing in cybersecurity and machine learning",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance hover:scale-105 transition-transform inline-block">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Passionate about cybersecurity, machine learning, and building secure intelligent systems
          </p>
        </div>

        {/* Executive Summary */}
        <Card
          className="mb-12 animate-slide-in-up hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
          style={{ animationDelay: "0.1s" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
              <GraduationCap className="h-6 w-6 text-primary group-hover:animate-pulse" />
              Executive Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {profileData.bio.map((point, index) => (
              <div key={index} className="flex gap-3 hover:translate-x-2 transition-transform">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors">{point}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Education */}
        <div className="mb-12">
          <h2
            className="text-3xl font-bold mb-8 animate-slide-in-up hover:text-primary transition-colors"
            style={{ animationDelay: "0.2s" }}
          >
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="animate-slide-in-up hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2 hover:text-foreground transition-colors">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <Badge
                        variant="secondary"
                        className="text-sm hover:scale-110 transition-transform cursor-default"
                      >
                        {edu.grade}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  {edu.department && (
                    <p className="text-muted-foreground hover:text-foreground transition-colors">{edu.department}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Honors & Awards */}
        <div>
          <h2
            className="text-3xl font-bold mb-8 animate-slide-in-up hover:text-primary transition-colors"
            style={{ animationDelay: "0.6s" }}
          >
            Honors & Awards
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {awardsData.map((award, index) => (
              <Card
                key={index}
                className="animate-scale-in hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${0.7 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Award className="h-6 w-6 text-primary group-hover:animate-pulse" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{award.title}</h3>
                      <p className="text-sm text-primary font-semibold mb-2">{award.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3 hover:text-foreground transition-colors">
                        {award.period}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up" style={{ animationDelay: "1s" }}>
            Experience
          </h2>
          <Card className="animate-slide-in-up" style={{ animationDelay: "1.1s" }}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Active Member</h3>
                  <p className="text-lg text-primary font-semibold mb-2">BUET Robotics Club</p>
                  <p className="text-muted-foreground mb-2">Bangladesh University of Engineering and Technology</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>January 2022 - Present</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Participate in many competitions organized by the club</p>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <p className="text-muted-foreground">Join weekly seminars regularly</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
