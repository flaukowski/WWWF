import Link from "next/link";

export default function OrganizePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-r from-wwwf-olive to-wwwf-earth text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-7xl mb-6">📋</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Organize a WWWF Event
          </h1>
          <p className="text-xl mb-8">
            Complete toolkit for hosting a local Wrestling for Peace event
          </p>
          <a
            href="https://github.com/flaukowski/WWWF/blob/main/docs/organizer-guide/README.md"
            target="_blank"
            rel="noopener noreferrer"
            className="wwwf-button bg-white text-wwwf-earth hover:bg-gray-100 inline-block"
          >
            Read Full Organizer Guide →
          </a>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="wwwf-section bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-wwwf-earth dark:text-wwwf-clay">
            What You Need to Get Started
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="wwwf-card">
              <h3 className="font-bold text-xl mb-4 text-wwwf-peace">Essential</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Local wrestling club or community center</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Certified referee(s)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Venue with mats/space</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span>Peace Charter commitment</span>
                </li>
              </ul>
            </div>

            <div className="wwwf-card">
              <h3 className="font-bold text-xl mb-4 text-wwwf-olive">Recommended</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Music/arts partners</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Livestream capability</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Youth outreach connections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>Local media relationships</span>
                </li>
              </ul>
            </div>

            <div className="wwwf-card">
              <h3 className="font-bold text-xl mb-4 text-wwwf-earth">Nice to Have</h3>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400 mt-1">✓</span>
                  <span>Sponsor support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400 mt-1">✓</span>
                  <span>Cultural organization partnerships</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-gray-400 mt-1">✓</span>
                  <span>Translation services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="wwwf-section bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-wwwf-earth dark:text-wwwf-clay">
            3-Month Planning Timeline
          </h2>
          <div className="space-y-8">
            {[
              {
                month: "Month 1",
                title: "Foundation",
                tasks: [
                  "Form organizing committee (3-5 people)",
                  "Identify venue and secure date",
                  "Register event on WWWF global map",
                  "Sign Peace Charter as a chapter",
                  "Contact local wrestling clubs/teams",
                ],
              },
              {
                month: "Month 2",
                title: "Partnerships & Logistics",
                tasks: [
                  "Recruit musicians/artists",
                  "Find certified referees",
                  "Confirm insurance and permits",
                  "Secure equipment (mats, sound system)",
                  "Design event schedule",
                ],
              },
              {
                month: "Month 3",
                title: "Marketing & Final Prep",
                tasks: [
                  "Launch marketing campaign",
                  "Begin wrestler registration",
                  "Confirm music/arts lineup",
                  "Test livestream equipment",
                  "Conduct safety briefing with staff",
                ],
              },
            ].map((phase, idx) => (
              <div key={idx} className="wwwf-card">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-wwwf-peace to-wwwf-olive rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {phase.month.split(" ")[1]}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-wwwf-earth dark:text-wwwf-clay">
                      {phase.month}: {phase.title}
                    </h3>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-start space-x-2">
                          <span className="text-wwwf-peace mt-1">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Day Flow */}
      <section className="wwwf-section bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-wwwf-earth dark:text-wwwf-clay">
            Recommended Event Flow
          </h2>
          <div className="space-y-4">
            {[
              { time: "12:00 PM", activity: "Opening Cultural Ceremony", duration: "15 min" },
              { time: "12:15 PM", activity: "Peace Charter Reading", duration: "10 min" },
              { time: "12:30 PM", activity: "Youth Wrestling Matches", duration: "60 min" },
              { time: "1:30 PM", activity: "Cultural Style Showcase", duration: "30 min" },
              { time: "2:00 PM", activity: "Music & Art Intermission", duration: "30 min" },
              { time: "2:30 PM", activity: "Main Exhibition Matches", duration: "90 min" },
              { time: "4:00 PM", activity: "Global Synchronization Moment", duration: "5 min" },
              { time: "4:05 PM", activity: "Final Matches", duration: "25 min" },
              { time: "4:30 PM", activity: "Closing Communal Circle", duration: "15 min" },
              { time: "4:45 PM", activity: "Closing Performance", duration: "15 min" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex-shrink-0 w-24 font-bold text-wwwf-peace">
                  {item.time}
                </div>
                <div className="flex-1 font-semibold text-gray-900 dark:text-white">
                  {item.activity}
                </div>
                <div className="flex-shrink-0 text-sm text-gray-600 dark:text-gray-400">
                  {item.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Requirements */}
      <section className="wwwf-section bg-red-50 dark:bg-red-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-red-700 dark:text-red-400">
            ⚠️ Non-Negotiable Safety Requirements
          </h2>
          <div className="space-y-4">
            {[
              "Certified referees only - All matches must be officiated by certified wrestling referees",
              "Proper equipment - Regulation mats, headgear, inspected equipment",
              "Medical presence - First aid kit on-site, EMT recommended",
              "Participant requirements - All wrestlers sign waiver, minors need parent/guardian signature",
              "No wrestler competes if injured or ill - Safety first, always",
            ].map((requirement, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-lg">
                <span className="text-2xl flex-shrink-0">🛡️</span>
                <p className="text-gray-700 dark:text-gray-300 font-medium">{requirement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="wwwf-section bg-gradient-to-br from-wwwf-peace to-wwwf-olive text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Resources & Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">📖</div>
              <h3 className="font-bold text-xl mb-2">Full Guide</h3>
              <p className="mb-4">50+ page comprehensive organizer toolkit</p>
              <a
                href="https://github.com/flaukowski/WWWF/blob/main/docs/organizer-guide/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white text-wwwf-peace rounded-md font-semibold hover:bg-gray-100"
              >
                Read Guide
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="font-bold text-xl mb-2">Register Event</h3>
              <p className="mb-4">Add your city to the global map</p>
              <Link
                href="/events#register"
                className="inline-block px-4 py-2 bg-white text-wwwf-olive rounded-md font-semibold hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          </div>

          <p className="text-xl font-semibold italic">
            "You are not just hosting an event. You are building a movement."
          </p>
        </div>
      </section>
    </div>
  );
}
