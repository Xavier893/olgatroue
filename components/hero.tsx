import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero2.jpg?height=1080&width=1920"
          alt="Wedding couple"
          fill
          objectFit="cover"
          priority
        />
      </div>

      {/* Dark overlay backdrop */}
      <div className="absolute inset-0 bg-black/25 z-0"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl z-0"></div>
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-emerald-200/20 rounded-full blur-lg z-0"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-amber-200/15 rounded-full blur-md z-0"></div>

      {/* Foreground text */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-wide">
            Olga <span className="font-script text-amber-300">&</span> Edrich
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            <div className="mx-4 w-2 h-2 bg-white/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>
          <p className="text-xl md:text-2xl font-light tracking-widest mb-8 text-amber-200">
            December 15, 2025
          </p>
          <p className="text-lg md:text-xl font-light max-w-3xl mx-auto leading-relaxed text-slate-100">
            Join us as we begin our greatest adventure together, surrounded by
            the love of family and friends
          </p>
        </div>
      </div>
    </section>
  );
}
