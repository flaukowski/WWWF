export default function CulturalStylesSection() {
  const styles = [
    { name: "Folkstyle", region: "USA", flag: "🇺🇸" },
    { name: "Freestyle", region: "International", flag: "🌐" },
    { name: "Greco-Roman", region: "Mediterranean", flag: "🏛️" },
    { name: "Sumo", region: "Japan", flag: "🇯🇵" },
    { name: "Laamb", region: "Senegal", flag: "🇸🇳" },
    { name: "Bökh", region: "Mongolia", flag: "🇲🇳" },
    { name: "Kushti", region: "India", flag: "🇮🇳" },
    { name: "Yağlı Güreş", region: "Turkey", flag: "🇹🇷" },
    { name: "Schwingen", region: "Switzerland", flag: "🇨🇭" },
    { name: "Glíma", region: "Iceland", flag: "🇮🇸" },
    { name: "Ssireum", region: "Korea", flag: "🇰🇷" },
  ];

  return (
    <section className="wwwf-section bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="wwwf-subheading text-center mb-6">
          Cultural Wrestling Styles
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          WWWF honors and incorporates wrestling traditions from around the world.
          Each local event can showcase its traditional style while participating in the global festival.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {styles.map((style, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-wwwf-unity to-white dark:from-gray-800 dark:to-gray-700 hover:scale-105 transition-transform duration-200"
            >
              <div className="text-4xl mb-2">{style.flag}</div>
              <div className="font-bold text-lg text-wwwf-earth dark:text-wwwf-clay">
                {style.name}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {style.region}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 dark:text-gray-300 italic">
            And many more traditions from cultures around the world...
          </p>
        </div>
      </div>
    </section>
  );
}
