"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typewriter } from "@/components/ui/typewriter";
import { ArrowRight, Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
    profile.image
  }`;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Name and Title */}
              <div
                className={`space-y-4 ${
                  isVisible ? "animate-slide-in-left" : "opacity-0"
                }`}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                  <span className="text-foreground">{profile.name}</span>
                </h1>
                <div className="text-xl sm:text-2xl text-muted-foreground font-medium h-16 sm:h-14 lg:h-12 flex items-start">
                  <Typewriter
                    text={profile.tagline}
                    speed={0.08}
                    delay={500}
                    loop={true}
                    pauseTime={3000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Summary */}
              <div
                className={`${
                  isVisible
                    ? "animate-slide-in-left animate-delay-200"
                    : "opacity-0"
                }`}
              >
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed text-pretty">
                  {profile.summary[0]}
                </p>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center ${
                  isVisible
                    ? "animate-slide-in-left animate-delay-300"
                    : "opacity-0"
                }`}
              >
                <Button
                  asChild
                  size="lg"
                  className="group hover:scale-105 transition-transform"
                >
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform hover:bg-primary/10 bg-transparent"
                >
                  <Link href="/api/cv" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download CV
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right side - Profile Image */}
            <div
              className={`flex justify-center lg:justify-end ${
                isVisible
                  ? "animate-slide-in-right animate-delay-200"
                  : "opacity-0"
              }`}
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/30 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    width={400}
                    height={400}
                    className="rounded-lg border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-500"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-8 pt-20 max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0"
            }`}
          >
            <div className="text-center group cursor-default hover:scale-110 transition-all duration-300 p-6 rounded-lg hover:bg-primary/5 hover:shadow-lg">
              <div className="stat-number text-4xl font-bold text-primary group-hover:animate-pulse">
                7+
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Technical Projects
              </div>
            </div>
            <div className="text-center group cursor-default hover:scale-110 transition-all duration-300 p-6 rounded-lg hover:bg-primary/5 hover:shadow-lg">
              <div className="stat-number text-4xl font-bold text-primary group-hover:animate-pulse">
                1
              </div>
              <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                Research Publication
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
