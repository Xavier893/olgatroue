export function Venue() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="font-script text-3xl md:text-4xl text-emerald-700 mb-4">
            Where We'll Say
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-slate-800 mb-6">
            "I Do"
          </h2>
          <div className="w-24 h-1 bg-emerald-400 rounded-full mx-auto mb-6" />
          <p className="text-slate-700 text-lg max-w-2xl mx-auto">
            Join us at our beautiful venue for an unforgettable celebration of
            love.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/40 overflow-hidden mb-12">
            <div className="grid md:grid-cols-2">
              <div className="p-8 text-center border-r border-slate-100/50">
                <h3 className="font-serif text-2xl text-slate-800 mb-4">
                  Ceremony
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">Kwatala Game Lodge</p>
                  <p>Dinokeng Reserve</p>
                  <p className="mt-4 font-medium">2:00 PM</p>
                </div>
              </div>
              <div className="p-8 text-center">
                <h3 className="font-serif text-2xl text-slate-800 mb-4">
                  Reception
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="font-medium">Kwatala Game Lodge</p>
                  <p>Dinokeng Reserve</p>
                  <p className="mt-4 font-medium">2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed with rounded corners and shadow */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.455020592573!2d28.3233949!3d-25.3895752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfeaed2bc60a15%3A0x988cb411cae74b53!2sKwalata%20Game%20Lodge%20in%20Dinokeng%20Game%20Reserve!5e0!3m2!1sen!2sza!4v1755543097021!5m2!1sen!2sza"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="text-center mt-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/30">
            <p className="text-gray-700 mb-4">
              <strong>Dress Code:</strong> Smart summer wear — ladies can rock
              summer dresses with sandals, and guys can go for neat golf shorts
              with a short-sleeve collared shirt and smart shoes (no sneakers).
            </p>
            <p className="text-gray-700">
              <strong>No Kids Allowed!</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
