import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="wwwf-section bg-gradient-to-r from-wwwf-earth to-wwwf-olive text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="wwwf-subheading mb-6">Join the Movement</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you're a wrestler, organizer, musician, artist, technologist, peace advocate,
          or concerned citizen — there is a place for you here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">🤼</div>
            <h3 className="font-bold text-xl mb-2">Participate</h3>
            <p className="text-sm mb-4">
              Find an event near you and wrestle for peace
            </p>
            <Link
              href="/events"
              className="inline-block px-4 py-2 bg-white text-wwwf-earth rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Find Events
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="font-bold text-xl mb-2">Organize</h3>
            <p className="text-sm mb-4">
              Host a WWWF event in your city
            </p>
            <Link
              href="/organize"
              className="inline-block px-4 py-2 bg-white text-wwwf-olive rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl mb-4">💻</div>
            <h3 className="font-bold text-xl mb-2">Contribute</h3>
            <p className="text-sm mb-4">
              Help build the platform and tools
            </p>
            <a
              href="https://github.com/flaukowski/WWWF"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-white text-wwwf-peace rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="text-2xl font-bold mb-4">
          "Together, we wrestle for peace."
        </div>

        <Link
          href="/peace-charter"
          className="inline-block px-8 py-4 bg-white text-wwwf-earth text-xl font-bold rounded-lg hover:bg-gray-100 transition-colors"
        >
          Sign the Peace Charter →
        </Link>
      </div>
    </section>
  );
}
