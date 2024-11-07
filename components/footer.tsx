import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="w-full">
      <div className="max-w-5xl mx-auto px-4">
        <Separator className="bg-[#2a2a2a]" />
      </div>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} IRONMIND ACADEMY. All rights reserved.
        </p>
      </div>
    </footer>
  )
}