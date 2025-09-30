"use client"

import type React from "react"

import { useState } from "react"
import { profileData } from "@/data/profile"
import { Mail, MapPin, Phone, Linkedin, Github, Send } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link with form data
    const mailtoLink = `mailto:${profileData.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Get In Touch</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Feel free to reach out for collaborations, research opportunities, or just to connect
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sm text-muted-foreground">{profileData.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${profileData.phone}`}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-sm text-muted-foreground">{profileData.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-3 rounded-lg">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">{profileData.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle>Connect Online</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>

                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-accent transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-up" style={{ animationDelay: "0.3s" }}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <Card className="mt-8 animate-slide-in-up border-primary/20" style={{ animationDelay: "0.4s" }}>
          <CardContent className="p-6">
            <h3 className="text-lg font-bold mb-3">Open to Opportunities</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm currently open to research collaborations, internship opportunities, and interesting projects in the
              fields of cybersecurity, machine learning, and adversarial AI. If you have an exciting opportunity or just
              want to discuss technology, feel free to reach out!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
