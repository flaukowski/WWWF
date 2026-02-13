import Link from "next/link";

export default function Hero() {
  return (
    <section className="wwwf-hero min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl">🤼</div>
        <div className="absolute bottom-20 right-10 text-9xl">🕊️</div>
        <div className="absolute top-1/2 left-1/4 text-7xl">🌍</div>
      </div>

      <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
        <div className="mb-6">
          <span className="text-6xl md:text-8xl">🕊️</span>
        </div>

        <h1 className="wwwf-heading mb-6 text-gray-900">
          World Wide Wrestling Festival
        </h1>

        <p className="text-xl md:text-2xl mb-4 text-gray-800 max-w-3xl mx-auto">
          A Global Citizen-Led Festival for Peace Through Competition, Art & Shared Humanity
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 mb-8">
          <Link href="/peace-charter" className="wwwf-button-primary text-lg">
            Sign the Peace Charter
          </Link>
          <Link href="/events" className="wwwf-button-secondary text-lg">
            Find an Event
          </Link>
          <Link
            href="/organize"
            className="wwwf-button bg-white text-wwwf-earth border-2 border-wwwf-earth hover:bg-wwwf-unity text-lg"
          >
            Organize Your City
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-lg text-wwwf-earth">Competitive</div>
            <div className="text-gray-700">without hatred</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-lg text-wwwf-olive">Powerful</div>
            <div className="text-gray-700">without violence</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4">
            <div className="font-bold text-lg text-wwwf-peace">Ancient</div>
            <div className="text-gray-700">without being regressive</div>
          </div>
        </div>

        <div className="mt-12 text-lg font-semibold text-gray-900">
          <p className="mb-2">This is not anti-government.</p>
          <p className="text-2xl">This is pro-humanity.</p>
        </div>
      </div>
    </section>
  );
}
