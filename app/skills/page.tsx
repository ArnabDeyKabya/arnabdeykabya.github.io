import type { Metadata } from "next"
import { skillsData } from "@/data/skills"
import { extracurricularData } from "@/data/extracurricular"
import {
  Code2,
  Wrench,
  Database,
  Terminal,
  Cpu,
  MessageSquare,
  Clock,
  Lightbulb,
  FileCode,
  Settings,
  Trophy,
  Calendar,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Skills & Extracurricular | Arnab Dey",
  description: "Technical skills, programming languages, frameworks, tools, and extracurricular activities",
}

const iconMap: Record<string, any> = {
  Languages: Code2,
  Frameworks: Wrench,
  "Developer Tools": Terminal,
  Scripting: FileCode,
  "Simulation Tools": Settings,
  "Operating System": Cpu,
  Databases: Database,
  Communication: MessageSquare,
  Management: Clock,
  "Problem Solving": Lightbulb,
}

export default function SkillsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance hover:scale-105 transition-transform inline-block">
            Skills & Extracurricular Activities
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Technical proficiencies, professional competencies, and achievements beyond academics
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillsData.map((skillCategory, index) => {
            const Icon = iconMap[skillCategory.category] || Code2
            return (
              <Card
                key={index}
                className="animate-scale-in hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default border-border/50 hover:border-primary/30"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                      <Icon className="h-5 w-5 text-primary group-hover:animate-pulse" />
                    </div>
                    <span className="group-hover:text-primary transition-colors">{skillCategory.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="animate-fade-in hover:scale-110 hover:bg-primary/20 transition-all cursor-default"
                        style={{ animationDelay: `${0.2 + index * 0.1 + skillIndex * 0.05}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Competitive Programming */}
        <Card
          className="mt-12 animate-slide-in-up border-primary/20 hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default"
          style={{ animationDelay: "1s" }}
        >
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                <Lightbulb className="h-5 w-5 text-primary group-hover:animate-pulse" />
              </div>
              <span className="group-hover:text-primary transition-colors">Competitive Programming</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Active problem solver on multiple competitive programming platforms:
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="hover:scale-110 hover:bg-primary/10 transition-all cursor-default">
                LeetCode
              </Badge>
              <Badge variant="outline" className="hover:scale-110 hover:bg-primary/10 transition-all cursor-default">
                Codeforces
              </Badge>
              <Badge variant="outline" className="hover:scale-110 hover:bg-primary/10 transition-all cursor-default">
                LightOJ
              </Badge>
              <Badge variant="outline" className="hover:scale-110 hover:bg-primary/10 transition-all cursor-default">
                GeeksforGeeks
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card
            className="animate-slide-in-up hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default"
            style={{ animationDelay: "1.1s" }}
          >
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">Bangla</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                Native Proficiency
              </Badge>
            </CardContent>
          </Card>
          <Card
            className="animate-slide-in-up hover:shadow-2xl hover:scale-105 transition-all duration-300 group cursor-default"
            style={{ animationDelay: "1.2s" }}
          >
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">English</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="hover:scale-110 transition-transform cursor-default">
                Professional Proficiency
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Extracurricular Activities Section */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Extracurricular Activities
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Competitions, achievements, and activities beyond academics
            </p>
          </div>

          {/* Activities */}
          <div className="space-y-8">
            {extracurricularData.map((activity, index) => (
              <Card
                key={index}
                className="animate-slide-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Trophy className="h-5 w-5 text-primary" />
                    </div>
                    {activity.activity}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>{activity.period}</span>
                    <Badge variant="secondary" className="ml-2">
                      {activity.role}
                    </Badge>
                  </div>
                  {activity.description && (
                    <p className="text-muted-foreground mb-4 leading-relaxed">{activity.description}</p>
                  )}
                  {activity.achievements && activity.achievements.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-semibold text-sm mb-2">Key Achievements:</p>
                      {activity.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex gap-3">
                          <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Highlights */}
          <Card className="mt-12 animate-slide-in-up border-primary/20" style={{ animationDelay: "0.4s" }}>
            <CardHeader>
              <CardTitle>Notable Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Runner Up - Divisional Quiz Competition 2017</p>
                    <p className="text-sm text-muted-foreground">
                      Secured second position in the divisional level quiz competition
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Multiple Quiz Competition Wins</p>
                    <p className="text-sm text-muted-foreground">
                      Won prizes in numerous quizzing competitions throughout school years
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">8+ Years of Active Participation</p>
                    <p className="text-sm text-muted-foreground">
                      Consistently participated in Mathematics Olympiad and Quiz competitions from 2012 to 2020
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
