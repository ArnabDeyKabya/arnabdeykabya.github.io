"use client"

import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageNavigationProps {
  previousPage?: {
    path: string
    name: string
  }
  nextPage?: {
    path: string
    name: string
  }
  currentPage?: string
  currentIndex?: number
  totalPages?: number
}

export function StandalonePageNavigation({ 
  previousPage, 
  nextPage, 
  currentPage,
  currentIndex,
  totalPages 
}: PageNavigationProps) {
  return (
    <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          {/* Previous Button */}
          <div className="flex-1">
            {previousPage ? (
              <Link href={previousPage.path}>
                <Button variant="outline" className="group hover:scale-105 transition-all duration-200">
                  <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">Previous</div>
                    <div className="font-medium">{previousPage.name}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div /> // Empty div to maintain spacing
            )}
          </div>
          
          {/* Current Page Indicator */}
          {currentPage && (
            <div className="text-center px-4">
              {currentIndex !== undefined && totalPages && (
                <div className="text-sm text-muted-foreground">
                  {currentIndex + 1} of {totalPages}
                </div>
              )}
              <div className="font-medium text-sm">
                {currentPage}
              </div>
            </div>
          )}
          
          {/* Next Button */}
          <div className="flex-1 flex justify-end">
            {nextPage ? (
              <Link href={nextPage.path}>
                <Button variant="outline" className="group hover:scale-105 transition-all duration-200">
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Next</div>
                    <div className="font-medium">{nextPage.name}</div>
                  </div>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <div /> // Empty div to maintain spacing
            )}
          </div>
        </div>
      </div>
    </div>
  )
}