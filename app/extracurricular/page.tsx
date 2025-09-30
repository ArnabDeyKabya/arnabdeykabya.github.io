import type { Metadata } from "next"
import { extracurricularData } from "@/data/extracurricular"
import { Trophy, Calendar } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Extracurricular | Arnab Dey",
  description: "Extracurricular activities, competitions, and achievements",
}

export default function ExtracurricularPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Extracurricular Activities</h1>
          <p className="text-xl text-muted-foreground text-pretty">
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
  )
}
