import { Truck, Package, RotateCcw, Lock } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    { icon: Truck, title: "Fast Delivery", description: "Same-day delivery available" },
    { icon: Package, title: "COD Available", description: "Pay on delivery" },
    { icon: RotateCcw, title: "Easy Returns", description: "7-day return policy" },
    { icon: Lock, title: "Secure Payments", description: "SSL encrypted checkout" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          return (
            <div key={benefit.title} className="text-center p-6 rounded-xl border border-white/5 bg-card/20 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-foreground text-sm md:text-base mb-1.5 uppercase tracking-wide">{benefit.title}</h3>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
