"use client"
import { useEffect } from "react"
import { toast } from "sonner"

export function PromoToast() {
  useEffect(() => {
    const timer = setTimeout(() => {
      toast(
        "FREE TRADING GUIDE BUNDLE!",
        {
          description: "Get access to my comprehensive trading guide bundle completely FREE by joining the newsletter.",
          duration: 10000,
          className: "bg-[#1a1a1a] border-[#2a2a2a] text-white",
          descriptionClassName: "text-gray-400",
          action: {
            label: "Join Now",
            onClick: () => (document.querySelector('input[type="email"]') as HTMLInputElement)?.focus(),
          },
        }
      )
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return null
}