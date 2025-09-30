import type { Metadata } from "next"
import { educationData, courseworkData } from "@/data/academics"
import { GraduationCap, BookOpen, Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Academics | Arnab Dey",
  description: "Academic background, education, and relevant coursework",
}

export default function AcademicsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Academics</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Educational background and relevant coursework in Computer Science
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            Education
          </h2>
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card
                key={index}
                className="animate-slide-in-up hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                          <p className="text-lg text-primary font-semibold mb-2">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2">
                          <Badge variant="default" className="text-base px-4 py-1.5 flex items-center gap-2 bg-primary">
                            <Award className="h-4 w-4" />
                            {edu.cgpa || edu.gpa}
                          </Badge>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                      {edu.department && <p className="text-muted-foreground">{edu.department}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Relevant Coursework */}
        <div>
          <h2 className="text-3xl font-bold mb-8 animate-slide-in-up" style={{ animationDelay: "0.5s" }}>
            Relevant Coursework
          </h2>
          <Card className="animate-slide-in-up" style={{ animationDelay: "0.6s" }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Bangladesh University of Engineering and Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {courseworkData.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent transition-colors animate-scale-in"
                    style={{ animationDelay: `${0.7 + index * 0.05}s` }}
                  >
                    <div className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Academic Achievements */}
        <Card className="mt-12 animate-slide-in-up border-primary/20" style={{ animationDelay: "0.8s" }}>
          <CardHeader>
            <CardTitle>Academic Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Dean's List Scholarship</p>
                  <p className="text-sm text-muted-foreground">
                    Awarded for extraordinary academic performance at BUET (2022-2023)
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Board Scholarship (HSC)</p>
                  <p className="text-sm text-muted-foreground">
                    Dinajpur Education Board scholarship for outstanding HSC results
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Board Scholarship (SSC) - 2nd Merit Position</p>
                  <p className="text-sm text-muted-foreground">
                    Secured 2nd position in Dinajpur Education Board SSC examination
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1.5 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <p className="font-semibold mb-1">Consistent Academic Excellence</p>
                  <p className="text-sm text-muted-foreground">
                    Perfect GPA of 5.00/5.00 in both SSC and HSC examinations
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
