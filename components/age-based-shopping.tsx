import Link from "next/link"

export default function AgeBasedShopping() {
  const ageGroups = [
    { range: "3–5 Years", icon: "🧒", color: "from-blue-100 to-blue-50" },
    { range: "6–9 Years", icon: "👦", color: "from-purple-100 to-purple-50" },
    { range: "10–13 Years", icon: "🧑", color: "from-green-100 to-green-50" },
    { range: "14+ Years", icon: "👨", color: "from-orange-100 to-orange-50" },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Shop by Age</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {ageGroups.map((group) => (
          <Link
            key={group.range}
            href="/toys"
            className="group relative px-6 py-10 rounded-xl bg-card/30 border border-white/5 hover:border-primary/50 hover:bg-card/50 transition-all duration-300 overflow-hidden block text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10">
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">{group.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{group.range}</h3>
              <span className="text-xs font-bold text-primary tracking-widest uppercase border-b border-primary/20 pb-0.5 group-hover:border-primary transition-colors">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
