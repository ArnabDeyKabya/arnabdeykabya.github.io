"use client""use client"



import { Download } from "lucide-react"import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"import { Button } from "@/components/ui/button"



export function DownloadCV() {export function DownloadCV() {

  return (  return (

    <Button    <Button

      variant="outline"      variant="outline"

      size="lg"      size="lg"

      className="hover:scale-105 transition-transform hover:bg-primary/10 bg-transparent"      className="hover:scale-105 transition-transform hover:bg-primary/10 bg-transparent"

      asChild      asChild

    >    >

      <a       <a 

        href="/my-portfolio/assets/cv.pdf"         href="/my-portfolio/assets/cv.pdf" 

        target="_blank"        target="_blank"

        rel="noopener noreferrer"        rel="noopener noreferrer"

      >      >

        <Download className="mr-2 h-5 w-5" />        <Download className="mr-2 h-5 w-5" />

        Download CV        Download CV

      </a>      </a>

    </Button>    </Button>

  )  )

}}