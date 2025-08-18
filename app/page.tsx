import { Hero } from "@/components/hero"
import { Countdown } from "@/components/countdown"
import { RsvpForm } from "@/components/rsvp-form"
import { PhotoGallery } from "@/components/photo-gallery"
import { Venue } from "@/components/venue"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Countdown />
      <RsvpForm />
      <PhotoGallery />
      <Venue />
      <Footer />
    </main>
  )
}
