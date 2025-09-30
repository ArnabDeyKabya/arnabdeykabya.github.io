import { NextResponse } from "next/server"
import { readFileSync } from "fs"
import { join } from "path"

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'my-portfolio/public', 'cv.pdf')
    const fileBuffer = readFileSync(filePath)
    
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=cv.pdf'
      },
    })
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'CV file not found' }),
      { 
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
