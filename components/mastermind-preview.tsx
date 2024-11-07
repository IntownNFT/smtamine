"use client"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function MastermindPreview() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-4xl font-bold italic">Exclusive IRON MIND Access</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        Join the iron mind academy where you get vip access to live streams, signals, education, and 1 of 1 mentor sessions.
      </p>
      
      <Card className="bg-[#1a1a1a] border-[#2a2a2a] overflow-hidden max-w-3xl mx-auto mb-16">
        <div className="relative aspect-[16/9]">
          <Image
            src="/images/aminediscord.png"
            alt="Discord Community Preview"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Card>

      <div className="flex flex-col items-center gap-4 pb-20">
        <ArrowDown className="text-[#fd6e09] w-16 h-16 animate-bounce" />
        <Button 
          className="bg-[#fd6e09] hover:bg-[#fd6e09]/90 text-white font-bold text-lg px-8 py-6 rounded-full"
          onClick={() => window.open('https://whop.com/ironminds/', '_blank')}
        >
          GET ACCESS NOW
        </Button>
        <p className="text-sm text-gray-400 italic">Limited spots available</p>
      </div>
    </div>
  )
}