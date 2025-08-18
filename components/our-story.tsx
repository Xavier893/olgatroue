import Image from "next/image"

export function OurStory() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-amber-50/30 to-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-50/30 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-l from-slate-100/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-r from-emerald-100/20 to-transparent rounded-full blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-4">Once Upon a Time</div>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-6">Our Love Story</h2>
          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
            <div className="mx-4 w-3 h-3 bg-emerald-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto space-y-32">
          {/* First Meeting - Organic Layout */}
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
                  <div className="font-script text-2xl md:text-3xl text-emerald-700 mb-4">Chapter One</div>
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-800 mb-6">A Rainy Day Miracle</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      October 15th, 2019. The rain was pouring down outside Café Luna, and Jane had claimed her favorite
                      corner table with a worn copy of "Pride and Prejudice." The soft jazz music and the scent of
                      freshly ground coffee created the perfect reading atmosphere.
                    </p>
                    <p className="text-lg">
                      Meanwhile, John was frantically typing away on his laptop, racing against a midnight deadline. In
                      his rush to grab his third espresso of the evening, he knocked over his cup, sending coffee
                      cascading across the table.
                    </p>
                    <p className="text-lg font-medium text-emerald-800">
                      "Here, take these," Jane said with the warmest smile, offering her stack of napkins. That simple
                      act of kindness sparked a conversation that lasted until the café's closing time, and neither of
                      us wanted it to end.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=400"
                    alt="How we met"
                    width={400}
                    height={500}
                    className="relative rounded-2xl w-full h-auto shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* The Proposal - Asymmetric Layout */}
          <div className="relative">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-2 lg:order-1 relative">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=600&width=500"
                    alt="The proposal"
                    width={500}
                    height={600}
                    className="relative rounded-2xl w-full h-auto shadow-lg"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 order-1 lg:order-2 relative">
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/30">
                  <div className="font-script text-2xl md:text-3xl text-emerald-700 mb-4">Chapter Two</div>
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-800 mb-6">The Perfect Question</h3>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p className="text-lg">
                      Four years later, John knew exactly where to pop the question. He secretly contacted the owner of
                      Café Luna and arranged to have the entire place to themselves on a quiet Sunday evening.
                    </p>
                    <p className="text-lg">
                      When Jane walked in, she found the café transformed with hundreds of fairy lights, photos of their
                      journey together, and their song playing softly in the background. The same corner table where
                      they first met was set with her favorite flowers.
                    </p>
                    <p className="text-lg font-medium text-emerald-800">
                      "Jane, you turned an ordinary rainy day into the beginning of our extraordinary love story. Will
                      you marry me?" Through tears of joy, she whispered "Yes!" and our next adventure began.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Looking Forward - Centered Flowing Design */}
          <div className="text-center max-w-5xl mx-auto relative">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 md:p-16 shadow-lg border border-white/30">
              <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-6">Our Forever</div>
              <h3 className="font-serif text-4xl md:text-5xl text-slate-800 mb-8">The Next Chapter</h3>
              <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
                As we prepare to walk down the aisle surrounded by everyone we love, our hearts are full of gratitude
                and excitement. Thank you for being part of our story and for celebrating this magical moment with us.
                Here's to love, laughter, and our happily ever after.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
