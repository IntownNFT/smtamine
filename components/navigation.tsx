"use client"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-[#0f0f0f]/80">
      <div className="max-w-5xl mx-auto p-4 flex justify-between items-center">
        <Logo />
        <Button 
          className="bg-white text-black" 
          onClick={() => window.open('https://whop.com/ironminds/', '_blank')}
        >
          Join Academy
        </Button>
      </div>
    </nav>
  )
}