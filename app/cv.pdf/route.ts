import { NextResponse } from "next/server"

export async function GET() {
  // For now, return a message. User should replace this with actual CV file
  return new NextResponse(
    JSON.stringify({
      message: "CV download endpoint. Please add your CV PDF file to the public folder and update this route.",
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    },
  )
}
