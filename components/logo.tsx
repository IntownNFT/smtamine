"use client"
import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2 text-white">
      <Image
        src="/images/aminelogo.png"
        alt="IRONMIND Logo"
        width={32}
        height={32}
        className="object-contain"
        priority
      />
      <span className="font-bold text-lg">IRONMIND</span>
    </div>
  )
}