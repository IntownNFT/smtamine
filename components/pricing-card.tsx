import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  "80% Profit Split",
  "$2000 Profit Target",
  "$100 EOD Drawdown Limit",
  "5 Micros Max Size",
  "40% Rule Applied",
  "Scale up to 15 Contracts",
  "Zero Activation Fees"
]

interface PricingCardProps {
  rotation: string
  isVisible?: boolean
}

export function PricingCard({ rotation, isVisible = true }: PricingCardProps) {
  return (
    <Card className={`bg-[#1a1a1a] border-[#2a2a2a] max-w-md w-full transform ${rotation}`}>
      <CardContent className="pt-6">
        <div className={`space-y-4 ${!isVisible && "opacity-0"}`}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Premium Plan</h3>
            <div>
              <span className="text-2xl font-bold">$109</span>
              <span className="text-gray-400">/month</span>
            </div>
          </div>
          <div className="space-y-2">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#fd6e09]" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
          <Button className="w-full bg-[#fd6e09] hover:bg-[#fd6e09]/90">
            Coming Soon
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}