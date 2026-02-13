"use client";

import { useState } from "react";
import Link from "next/link";

export default function PeaceCharterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    role: "participant",
    organizationName: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) {
      alert("Please agree to the Peace Charter commitments to sign.");
      return;
    }

    // TODO: Send to backend API
    console.log("Signing Peace Charter:", formData);

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wwwf-unity to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-8xl mb-6">🕊️</div>
          <h1 className="text-4xl font-bold mb-4 text-wwwf-earth dark:text-wwwf-clay">
            Thank You for Signing!
          </h1>
          <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
            You are now part of a global movement wrestling for peace.
          </p>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-8">
            <p className="text-lg mb-4">
              <strong>{formData.name}</strong>
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {formData.location}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Signed on {new Date().toLocaleDateString()}
            </p>
          </div>
          <div className="space-y-4">
            <Link href="/events" className="wwwf-button-primary inline-block">
              Find an Event Near You
            </Link>
            <br />
            <Link href="/organize" className="wwwf-button-secondary inline-block">
              Organize Your City
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-wwwf-earth dark:text-wwwf-clay">
            The WWWF Peace Charter
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Global Commitment to Peace Through Disciplined Competition
          </p>
        </div>

        {/* Preamble */}
        <div className="wwwf-card mb-8">
          <h2 className="text-2xl font-bold mb-4 text-wwwf-earth">Preamble</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We, the participants, organizers, and supporters of the World Wide Wrestling Festival,
            recognize that competition is innate to human nature, violence is a choice not a necessity,
            and rules transform conflict into sport. By signing this charter, we commit to demonstrating that:
          </p>
          <blockquote className="mt-4 pl-4 border-l-4 border-wwwf-peace text-lg font-semibold italic">
            Strength is restraint. Power is discipline. Victory is earned through respect, not domination through destruction.
          </blockquote>
        </div>

        {/* Five Commitments */}
        <div className="space-y-6 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-wwwf-earth dark:text-wwwf-clay">
            The Five Commitments
          </h2>

          {[
            {
              number: "1",
              title: "Commitment to Nonviolence",
              icon: "🕊️",
              points: [
                "Engaging only in regulated, refereed, rule-bound competition",
                "Respecting the safety and dignity of all participants",
                "Refusing to glorify, promote, or engage in violence outside the rules of sport",
                "Ending every match with a handshake or cultural equivalent",
                "Treating victory and defeat with equal grace",
              ],
            },
            {
              number: "2",
              title: "Commitment to Civic Restraint",
              icon: "🙋",
              points: [
                "Participating as a citizen, not as a representative of any government",
                "Rejecting nationalistic rhetoric that divides rather than unites",
                "Celebrating cultural identity without demeaning others",
                "Maintaining political neutrality in festival activities",
                "Ensuring the festival remains grassroots and community-led",
              ],
            },
            {
              number: "3",
              title: "Commitment to Resolving Conflict Through Dialogue",
              icon: "💬",
              points: [
                "Choosing conversation over confrontation",
                "Listening to perspectives different from my own",
                "Seeking understanding before seeking to be understood",
                "Addressing disagreements through mediation, not escalation",
                "Modeling peaceful conflict resolution for future generations",
              ],
            },
            {
              number: "4",
              title: "Commitment to Respecting All Cultures",
              icon: "🌍",
              points: [
                "Honoring the diverse wrestling traditions of all cultures",
                "Learning about and appreciating customs different from my own",
                "Ensuring no cultural practice is mocked, appropriated, or diminished",
                "Welcoming participants of all backgrounds, identities, and beliefs",
                "Using the festival as an opportunity for cultural exchange",
              ],
            },
            {
              number: "5",
              title: "Commitment to Shared Humanity",
              icon: "🤝",
              points: [
                "Recognizing that all people share the same fundamental needs and dreams",
                "Treating every participant as a fellow human, not as 'other'",
                "Contributing to a global culture of peace through my actions",
                "Supporting the festival's mission beyond the event itself",
                "Carrying the spirit of peaceful competition into my daily life",
              ],
            },
          ].map((commitment) => (
            <div key={commitment.number} className="wwwf-card">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">{commitment.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-wwwf-earth dark:text-wwwf-clay">
                    {commitment.number}. {commitment.title}
                  </h3>
                  <ul className="space-y-2">
                    {commitment.points.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-wwwf-peace mt-1">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signing Form */}
        <div className="wwwf-card bg-gradient-to-br from-wwwf-unity to-white dark:from-gray-800 dark:to-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-center text-wwwf-earth dark:text-wwwf-clay">
            Sign the Charter
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
            Join thousands of people around the world committed to wrestling for peace.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Location (City, Country) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Tokyo, Japan"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  I am signing as: *
                </label>
                <select
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="participant">Individual Participant</option>
                  <option value="organizer">Event Organizer</option>
                  <option value="ambassador">Cultural Ambassador</option>
                  <option value="organization">Organization Representative</option>
                </select>
              </div>
            </div>

            {formData.role === "organization" && (
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Organization Name
                </label>
                <input
                  type="text"
                  value={formData.organizationName}
                  onChange={(e) => setFormData({ ...formData, organizationName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Organization name"
                />
              </div>
            )}

            <div className="bg-white/50 dark:bg-gray-900/50 p-6 rounded-lg">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 w-5 h-5 text-wwwf-peace focus:ring-wwwf-peace rounded"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  I have read and agree to uphold the five commitments of the WWWF Peace Charter.
                  I commit to wrestling for peace—not just in sport, but in life.
                </span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={!agreed}
                className="wwwf-button-primary text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Sign the Peace Charter
              </button>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Your signature will be publicly displayed (name and location only)
              </p>
            </div>
          </form>
        </div>

        {/* View Full Charter */}
        <div className="text-center mt-8">
          <a
            href="https://github.com/flaukowski/WWWF/blob/main/docs/peace-charter/PEACE_CHARTER.md"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wwwf-peace hover:underline font-semibold"
          >
            Read the Full Peace Charter →
          </a>
        </div>
      </div>
    </div>
  );
}
