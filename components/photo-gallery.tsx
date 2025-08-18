import Image from "next/image";

export function PhotoGallery() {
  const photos = [
    { src: "/g1.jpg?height=400&width=600", alt: "photo 1" },
    { src: "/g2.jpg?height=300&width=400", alt: "photo 2" },
    { src: "/g3.jpg?height=500&width=400", alt: "photo 3" },
    { src: "/g4.jpg?height=400&width=500", alt: "photo 4" },
    { src: "/g6.jpg?height=300&width=400", alt: "photo 5" },
    { src: "/g5.jpg?height=400&width=600", alt: "photo 6" },
    { src: "/g7.jpg?height=350&width=400", alt: "photo 7" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 via-slate-50 to-amber-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-4">
            The Venue in Focus
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-6">
            A Glimpse Through The Gallery
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-px bg-gradient-to-r from-emerald-400 via-amber-500 to-emerald-400"></div>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Take a closer look at the spaces where our celebration comes to
            life. This gallery captures the character of the venue, giving you a
            glimpse of the atmosphere we’ll share together.
          </p>
        </div>

        {/* Full-width flowing gallery */}
        <div className="w-full">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="break-inside-avoid group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto max-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
