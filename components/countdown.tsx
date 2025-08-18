"use client"

import { useState, useEffect } from "react"

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-12-15T00:00:00").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-24 bg-gradient-to-br from-slate-50 via-emerald-50 to-amber-50 overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-slate-200/15 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-tl from-slate-200/20 to-emerald-200/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-2">Until We Say</div>
        <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-12">"I Do"</h2>

        <div className="flex justify-center mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-emerald-400 via-amber-500 to-emerald-400"></div>
        </div>

        {/* Elegant horizontal countdown */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={item.label} className="text-center group">
                  <div className="relative mb-4">
                    {/* Elegant circular background */}
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-full bg-gradient-to-br from-slate-100 to-emerald-50 border-2 border-slate-200/50 flex items-center justify-center group-hover:border-emerald-300/50 transition-colors duration-300">
                      <div className="text-2xl md:text-3xl font-serif text-slate-800 font-medium">
                        {item.value.toString().padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                  <div className="text-slate-700 font-serif text-lg tracking-wide">{item.label}</div>
                  {/* Elegant separator line except for last item */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-0 w-px h-12 bg-gradient-to-b from-transparent via-slate-300/50 to-transparent transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
