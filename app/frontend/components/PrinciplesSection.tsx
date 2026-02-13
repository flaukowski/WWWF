export default function PrinciplesSection() {
  const principles = [
    {
      title: "Nonviolence",
      description: "All wrestling is regulated, refereed, and rule-bound.",
      icon: "🕊️",
      color: "wwwf-peace",
    },
    {
      title: "Cultural Inclusion",
      description: "Every nation can incorporate traditional wrestling styles.",
      icon: "🌍",
      color: "wwwf-olive",
    },
    {
      title: "Citizen-Led",
      description: "Organized bottom-up, not state-driven.",
      icon: "🙋",
      color: "wwwf-earth",
    },
    {
      title: "Simultaneity",
      description: "A synchronized 'Global Peace Grapple Hour' across time zones.",
      icon: "🕐",
      color: "wwwf-peace",
    },
    {
      title: "Arts Integration",
      description: "Each local event includes live music, cultural performance, and public art.",
      icon: "🎨",
      color: "wwwf-olive",
    },
  ];

  return (
    <section className="wwwf-section bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="wwwf-subheading text-center mb-12">Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="wwwf-card hover:shadow-xl transition-shadow duration-200"
            >
              <div className={`text-5xl mb-4`}>{principle.icon}</div>
              <h3 className={`font-bold text-xl mb-2 text-${principle.color}`}>
                {principle.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
