import Link from "next/link";
import Hero from "@/components/Hero";
import PrinciplesSection from "@/components/PrinciplesSection";
import CulturalStylesSection from "@/components/CulturalStylesSection";
import CallToAction from "@/components/CallToAction";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Mission Section */}
      <section className="wwwf-section bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="wwwf-subheading text-center mb-8">Why Wrestling?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🕊️</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">It Predates Organized War</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Wrestling existed before armies, before nations, before weapons of mass destruction.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🌍</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">It Exists in Every Culture</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    From Mongolian Bökh to Senegalese Laamb, from Greek Pále to Indian Kushti—wrestling is universal.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">It Requires Respect</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    You cannot wrestle from a distance. You must be close. You must follow rules. You must respect your opponent.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="text-4xl">✨</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">It Ends with a Handshake</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Every match, regardless of outcome, concludes with mutual acknowledgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <blockquote className="text-2xl font-semibold text-wwwf-earth">
              "This festival reframes strength as restraint."
            </blockquote>
          </div>
        </div>
      </section>

      <PrinciplesSection />
      <CulturalStylesSection />

      {/* Stats Section */}
      <section className="wwwf-section bg-wwwf-unity dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="wwwf-subheading text-center mb-12">The Movement So Far</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-wwwf-peace">10+</div>
              <div className="text-lg mt-2 text-gray-700 dark:text-gray-300">Target Cities (Phase 1)</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wwwf-olive">11</div>
              <div className="text-lg mt-2 text-gray-700 dark:text-gray-300">Wrestling Styles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wwwf-earth">5</div>
              <div className="text-lg mt-2 text-gray-700 dark:text-gray-300">Core Principles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wwwf-peace">∞</div>
              <div className="text-lg mt-2 text-gray-700 dark:text-gray-300">Peace Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Event Countdown */}
      <section className="wwwf-section bg-gradient-to-r from-wwwf-olive to-wwwf-peace text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="wwwf-subheading mb-6">Next Global Festival</h2>
          <p className="text-xl mb-8">
            Join wrestling events simultaneously across the globe
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-8 mb-8">
            <div className="text-6xl font-bold mb-2">TBD</div>
            <div className="text-lg">Date to be announced based on community readiness</div>
          </div>
          <Link
            href="/events"
            className="wwwf-button bg-white text-wwwf-peace hover:bg-gray-100 inline-block"
          >
            Register Your City
          </Link>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
