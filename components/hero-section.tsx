import Link from "next/link"
import { supabase } from "@/lib/supabase"

// Revalidate every 30 minutes
export const revalidate = 1800

export default async function HeroSection() {

  // Fetch active banner promotion
  const { data: promotion } = await supabase
    .from('promotions')
    .select('*')
    .eq('type', 'Banner')
    .eq('status', 'Active')
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  // Default content (fallback)
  const content = {
    heading_line1: "NEXT GEN",
    heading_line2: "PLAY",
    subheading: "Curated premium toys and stationery. Elevate your lifestyle with Nevizon's exclusive selection.",
    btn_text: "EXPLORE COLLECTION",
    btn_link: "/toys",
    image: null
  }

  // Override with promotion data if available
  if (promotion) {
    // Basic splitting for 2-line effect if needed, or just use full heading
    const parts = promotion.heading ? promotion.heading.split(' ') : ["NEXT GEN", "PLAY"]
    content.heading_line1 = parts.slice(0, Math.ceil(parts.length / 2)).join(' ')
    content.heading_line2 = parts.slice(Math.ceil(parts.length / 2)).join(' ')

    // Or just use the whole string if it's short, but let's try to keep the design
    if (promotion.heading) {
      content.heading_line1 = promotion.heading
      content.heading_line2 = ""
    }

    content.subheading = promotion.subheading || content.subheading
    content.btn_text = promotion.btn_text || content.btn_text
    content.btn_link = promotion.btn_link || content.btn_link
    content.image = promotion.image_url
  }

  return (
    <section className="relative w-full overflow-hidden bg-background pt-10 pb-20 md:pt-20 md:pb-32">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50 mix-blend-screen"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              2026 Collection Live
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-[0.9] tracking-tighter text-balance">
              {promotion?.heading ? (
                <span>{promotion.heading}</span>
              ) : (
                <>
                  NEXT GEN <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-rose-600">
                    PLAY
                  </span>
                </>
              )}
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-lg">
              {content.subheading}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link
                href={content.btn_link}
                className="px-8 py-4 bg-primary text-primary-foreground font-bold tracking-wide rounded-full hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25 text-center"
              >
                {content.btn_text}
              </Link>
              <button className="px-8 py-4 border border-input bg-background/50 backdrop-blur-sm text-foreground font-bold tracking-wide rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300 text-center group">
                PREMIUM STATIONERY <span className="inline-block transition-transform group-hover:translate-x-1 ml-1">→</span>
              </button>
            </div>
          </div>

          {/* Right - Product Collage or Banner Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[3rem] blur-2xl transform rotate-6 scale-90 opacity-60"></div>

            {content.image ? (
              // Display Uploaded Banner Image
              <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src={content.image}
                  alt={content.heading_line1}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ) : (
              // Default Collage
              <div className="grid grid-cols-2 gap-4 auto-rows-max relative z-10">
                {/* Large featured card */}
                <div className="col-span-2 rounded-[2rem] bg-card/10 backdrop-blur-xl border border-white/10 p-10 flex items-center justify-center h-64 overflow-hidden shadow-2xl group hover:border-primary/30 transition-all duration-500">
                  <div className="text-8xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">⚡️</div>
                </div>

                {/* Smaller cards */}
                <div className="rounded-[2rem] bg-card/10 backdrop-blur-md border border-white/5 p-6 flex items-center justify-center h-32 shadow-lg hover:bg-card/20 transition duration-300">
                  <div className="text-5xl drop-shadow-lg">🎮</div>
                </div>
                <div className="rounded-[2rem] bg-card/10 backdrop-blur-md border border-white/5 p-6 flex items-center justify-center h-32 shadow-lg hover:bg-card/20 transition duration-300">
                  <div className="text-5xl drop-shadow-lg">🚀</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

