import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <Card className="bg-[#1a1a1a] border-[#2a2a2a]">
      <CardContent className="pt-6">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}