"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Define the page order and their display names
const pages = [
  { path: "/", name: "Home", icon: "🏠" },
  { path: "/education", name: "Education", icon: "📚" },
  { path: "/research", name: "Research", icon: "🔬" },
  { path: "/projects", name: "Projects", icon: "🚀" },
  { path: "/skills", name: "Skills", icon: "⚡" },
  { path: "/certifications", name: "Certifications", icon: "🏆" },
  { path: "/contact", name: "Contact", icon: "📬" }
]

export function PageNavigation() {
  const pathname = usePathname()
  
  // Find current page index
  const currentIndex = pages.findIndex(page => page.path === pathname)
  
  // If page not found in navigation, don't show navigation
  if (currentIndex === -1) return null
  
  const previousPage = currentIndex > 0 ? pages[currentIndex - 1] : null
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null
  
  return (
    <div className="relative border-t border-border/30 bg-gradient-to-r from-background via-background/98 to-background backdrop-blur-xl">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.08]" />
      
      {/* Ambient lighting effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-10 relative">
        <div className="flex justify-between items-center gap-8">
          {/* Previous Button */}
          <div className="flex-1 flex justify-start">
            {previousPage ? (
              <Link href={previousPage.path} className="group">
                <div className="page-nav-card relative overflow-hidden rounded-2xl p-5 min-w-[180px] max-w-[220px]">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-10 -left-10 w-6 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-700 ease-out" />
                  
                  <div className="flex items-center space-x-4">
                    <div className="page-nav-icon flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                      <ArrowLeft className="w-5 h-5 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
                    </div>
                    <div className="text-left">
                      <div className="text-xs text-muted-foreground/80 uppercase tracking-widest font-medium mb-1">
                        Previous
                      </div>
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center space-x-2">
                        <span className="text-xl filter group-hover:brightness-125 transition-all duration-300">
                          {previousPage.icon}
                        </span>
                        <span className="text-sm leading-tight">{previousPage.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="w-[220px]" />
            )}
          </div>
          
          {/* Current Page Indicator */}
          <div className="text-center px-6 hidden lg:flex flex-col items-center space-y-4">
            {/* Progress indicator */}
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary to-primary/60 animate-pulse shadow-lg shadow-primary/50" />
              <div className="text-xs text-muted-foreground/90 font-bold tracking-[0.2em] uppercase bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {currentIndex + 1} of {pages.length}
              </div>
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-primary/60 to-primary animate-pulse shadow-lg shadow-primary/50" />
            </div>
            
            {/* Current page card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-2xl blur-lg" />
              <div className="relative flex items-center space-x-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border border-primary/30 shadow-lg shadow-primary/10">
                <span className="text-2xl filter brightness-125 drop-shadow-lg">
                  {pages[currentIndex].icon}
                </span>
                <span className="font-bold text-base bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  {pages[currentIndex].name}
                </span>
              </div>
            </div>
          </div>
          
          {/* Next Button */}
          <div className="flex-1 flex justify-end">
            {nextPage ? (
              <Link href={nextPage.path} className="group">
                <div className="page-nav-card relative overflow-hidden rounded-2xl p-5 min-w-[180px] max-w-[220px]">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -top-10 -right-10 w-6 h-full bg-gradient-to-l from-transparent via-white/20 to-transparent -rotate-12 translate-x-[100%] group-hover:translate-x-[-300%] transition-transform duration-700 ease-out" />
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-xs text-muted-foreground/80 uppercase tracking-widest font-medium mb-1">
                        Next
                      </div>
                      <div className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 flex items-center space-x-2">
                        <span className="text-sm leading-tight">{nextPage.name}</span>
                        <span className="text-xl filter group-hover:brightness-125 transition-all duration-300">
                          {nextPage.icon}
                        </span>
                      </div>
                    </div>
                    <div className="page-nav-icon flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20">
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              <div className="w-[220px]" />
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mt-8 flex justify-center">
          <div className="relative w-full max-w-lg">
            <div className="w-full bg-border/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
              <div 
                className="h-full bg-gradient-to-r from-primary via-primary/90 to-primary/80 rounded-full transition-all duration-700 ease-out relative overflow-hidden"
                style={{ width: `${((currentIndex + 1) / pages.length) * 100}%` }}
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse" />
              </div>
            </div>
            {/* Progress percentage */}
            <div className="text-center mt-2 text-xs text-muted-foreground/70 font-medium">
              {Math.round(((currentIndex + 1) / pages.length) * 100)}% Complete
            </div>
          </div>
        </div>
        
        {/* Page dots indicator */}
        <div className="mt-6 flex justify-center space-x-3">
          {pages.map((page, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-500 ${
                index === currentIndex ? 'scale-125' : 'hover:scale-110'
              }`}
            >
              <div
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-primary to-primary/80 shadow-lg shadow-primary/50 ring-2 ring-primary/30 ring-offset-2 ring-offset-background' 
                    : index < currentIndex 
                      ? 'bg-primary/60 shadow-md shadow-primary/30' 
                      : 'bg-border/40 hover:bg-border/60'
                }`}
              />
              {/* Tooltip on hover */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-popover border border-border rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                {page.icon} {page.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}