export default function PromoSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-20">
      <div className="relative rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-12 md:p-16 text-center overflow-hidden shadow-2xl shadow-primary/20">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-black rounded-full blur-3xl mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Next Gen Collection
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto font-light">
            Experience the future of play with our exclusive 2026 catalog.
            Limited edition drops available now.
          </p>
          <button className="px-10 py-4 bg-white text-primary font-bold tracking-wide rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-xl">
            ACCESS CATALOG
          </button>
        </div>
      </div>
    </section>
  )
}
