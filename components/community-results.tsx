"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function CommunityResults() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-bold italic">IRON MIND VIP results</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Dont just take my word, look at what my students have to say!
      </p>
      
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden max-w-3xl mx-auto">
        <div className="relative aspect-[16/9]">
          <Image
            src="/images/aminecert.png"
            alt="Trading Results"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Card>
    </div>
  )
}