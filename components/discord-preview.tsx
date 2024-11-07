"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function DiscordPreview() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-bold italic">Live trading from a professional trader</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
       Join live trading sessions where you can ask questions, take signals, and master your mind across multiple markets.
      </p>
      
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden max-w-3xl mx-auto">
        <div className="relative w-full h-full">
          <Image
            src="/images/aminediscordlive.png"
            alt="Live Trading Session"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </Card>
    </div>
  )
}