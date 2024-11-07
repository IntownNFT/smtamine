"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PromoToast } from "@/components/promo-toast"
import { toast } from "sonner"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe')
      }

      toast.success('Successfully subscribed to the newsletter!')
      setEmail("")
      
      // Delay the redirect slightly to allow the success message to be seen
      setTimeout(() => {
        window.open('https://whop.com/ironminds/', '_blank')
      }, 1500)
    } catch (error) {
      console.error('Subscription error:', error)
      toast.error(error instanceof Error ? error.message : 'Failed to subscribe. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-20 text-center">
      <PromoToast />
      <h1 className="text-5xl font-bold mb-6">
        Welcome to the{" "}
        <span className="text-[#fd6e09]">
          IRON MIND
        </span>{" "}
        academy
      </h1>
      <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
        Your invitation to become an IRON MIND trader. Learn how hundreds of students are becoming profitable across multiple markets with my proven strategies. Created by SMTamine.
      </p>
      <form onSubmit={handleSubmit} className="flex max-w-md mx-auto gap-2">
        <Input 
          type="email" 
          placeholder="Enter your email" 
          className="bg-[#1a1a1a] border-[#2a2a2a]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        <Button 
          type="submit"
          className="bg-[#fd6e09] hover:bg-[#fd6e09]/90 whitespace-nowrap text-white"
          disabled={isLoading}
        >
          {isLoading ? "Subscribing..." : "Join Newsletter →"}
        </Button>
      </form>
    </section>
  )
}