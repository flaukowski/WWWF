import Link from "next/link";

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="wwwf-hero py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">🕊️</div>
          <h1 className="wwwf-heading mb-6 text-gray-900">Vision & Mission</h1>
          <p className="text-2xl text-gray-800 font-semibold">
            Reframing Strength as Restraint
          </p>
        </div>
      </section>

      {/* Main Vision */}
      <section className="wwwf-section bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-wwwf-earth dark:text-wwwf-clay">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              To create a synchronized, worldwide wrestling festival that channels humanity's competitive
              instinct into disciplined, rule-bound, respectful physical expression—paired with music, art,
              and digital connectivity—to symbolically and practically advocate for global peace.
            </p>
            <div className="bg-wwwf-unity dark:bg-gray-700 p-6 rounded-lg my-8">
              <p className="text-xl font-bold text-center mb-2">This is not anti-government.</p>
              <p className="text-2xl font-bold text-center text-wwwf-earth dark:text-wwwf-clay">
                This is pro-humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Characteristics */}
      <section className="wwwf-section bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-wwwf-earth dark:text-wwwf-clay">
            Core Characteristics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { label: "Competitive", value: "without hatred" },
              { label: "National", value: "without nationalism" },
              { label: "Powerful", value: "without violence" },
              { label: "Ancient", value: "without being regressive" },
              { label: "Modern", value: "without being synthetic" },
            ].map((item, idx) => (
              <div key={idx} className="wwwf-card text-center">
                <h3 className="text-2xl font-bold text-wwwf-earth dark:text-wwwf-clay mb-2">
                  {item.label}
                </h3>
                <p className="text-lg text-gray-700 dark:text-gray-300">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wrestling */}
      <section className="wwwf-section bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-wwwf-earth dark:text-wwwf-clay">
            Why Wrestling?
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "It Predates Organized War",
                description: "Wrestling existed before armies, before nations, before weapons of mass destruction.",
                icon: "⏳",
              },
              {
                title: "It Exists in Nearly Every Culture",
                description: "From Mongolian Bökh to Senegalese Laamb, from Greek Pále to Indian Kushti—wrestling is universal.",
                icon: "🌍",
              },
              {
                title: "It Requires Proximity, Discipline, and Respect",
                description: "You cannot wrestle from a distance. You must be close. You must follow rules. You must respect your opponent.",
                icon: "🤝",
              },
              {
                title: "It Ends with a Handshake",
                description: "Every match, regardless of outcome, concludes with mutual acknowledgment.",
                icon: "✨",
              },
            ].map((reason, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                <div className="text-5xl">{reason.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-wwwf-earth dark:text-wwwf-clay">
                    {reason.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbolism */}
      <section className="wwwf-section bg-gradient-to-r from-wwwf-earth to-wwwf-olive text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Symbolism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { concept: "Struggle", meaning: "Without annihilation" },
              { concept: "Dominance", meaning: "Without destruction" },
              { concept: "Intimacy", meaning: "Without hatred" },
              { concept: "Competition", meaning: "Within rules" },
              { concept: "Victory", meaning: "With respect" },
              { concept: "Defeat", meaning: "With dignity" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">{item.concept}</h3>
                <p className="text-lg">{item.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophical Framework */}
      <section className="wwwf-section bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-wwwf-earth dark:text-wwwf-clay">
            Philosophical Foundation
          </h2>
          <blockquote className="text-2xl font-semibold italic text-center mb-8 text-gray-700 dark:text-gray-300">
            "Civilization stabilizes through structured competition under constraint."
          </blockquote>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="mb-6">The festival embodies:</p>
            <ul className="space-y-4">
              <li>
                <strong className="text-wwwf-earth dark:text-wwwf-clay">Resonance under rules</strong>
                {" "}— Individual energy harmonized through shared structure
              </li>
              <li>
                <strong className="text-wwwf-earth dark:text-wwwf-clay">Energy without entropy</strong>
                {" "}— Channeling aggression into disciplined expression
              </li>
              <li>
                <strong className="text-wwwf-earth dark:text-wwwf-clay">Power without war</strong>
                {" "}— Demonstrating that strength need not destroy
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Long-Term Vision */}
      <section className="wwwf-section bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-wwwf-earth dark:text-wwwf-clay">
            Long-Term Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "Year 1",
                goals: ["10-50 cities participate", "Establish annual tradition", "Build community"],
              },
              {
                year: "Year 3",
                goals: ["100+ cities worldwide", "Educational integration", "Media recognition"],
              },
              {
                year: "Year 10",
                goals: ["Olympic-scale participation", "UN acknowledgment", "Cultural meme status"],
              },
            ].map((phase, idx) => (
              <div key={idx} className="wwwf-card text-center">
                <h3 className="text-2xl font-bold mb-4 text-wwwf-peace">{phase.year}</h3>
                <ul className="space-y-2 text-left">
                  {phase.goals.map((goal, gidx) => (
                    <li key={gidx} className="flex items-start space-x-2">
                      <span className="text-wwwf-peace mt-1">✓</span>
                      <span className="text-gray-700 dark:text-gray-300">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="wwwf-section bg-gradient-to-br from-wwwf-peace to-wwwf-olive text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
          <p className="text-xl mb-8">
            Whether you're a wrestler, organizer, musician, artist, technologist, peace advocate,
            or concerned citizen — there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/peace-charter" className="wwwf-button bg-white text-wwwf-peace hover:bg-gray-100">
              Sign the Peace Charter
            </Link>
            <Link href="/events" className="wwwf-button bg-wwwf-earth text-white hover:bg-opacity-90">
              Find an Event
            </Link>
            <Link href="/organize" className="wwwf-button bg-transparent border-2 border-white hover:bg-white/20">
              Organize Your City
            </Link>
          </div>
          <p className="mt-12 text-2xl font-bold italic">
            "Together, we wrestle for peace."
          </p>
        </div>
      </section>
    </div>
  );
}
