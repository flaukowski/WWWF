"use client";

import { useState } from "react";
import Link from "next/link";

export default function EventsPage() {
  const [filter, setFilter] = useState("all");

  // Mock data - will be replaced with API call
  const events = [
    {
      id: 1,
      city: "Tokyo",
      country: "Japan",
      date: "TBD",
      organizer: "Tokyo Wrestling Club",
      styles: ["Sumo", "Freestyle"],
      status: "planning",
      coordinates: [35.6762, 139.6503],
    },
    {
      id: 2,
      city: "Dakar",
      country: "Senegal",
      date: "TBD",
      organizer: "Laamb Senegal Association",
      styles: ["Laamb", "Freestyle"],
      status: "planning",
      coordinates: [14.7167, -17.4677],
    },
    {
      id: 3,
      city: "Mumbai",
      country: "India",
      date: "TBD",
      organizer: "Kushti Warriors",
      styles: ["Kushti", "Freestyle"],
      status: "planning",
      coordinates: [19.0760, 72.8777],
    },
    {
      id: 4,
      city: "Istanbul",
      country: "Turkey",
      date: "TBD",
      organizer: "Turkish Wrestling Federation",
      styles: ["Yağlı Güreş", "Greco-Roman"],
      status: "planning",
      coordinates: [41.0082, 28.9784],
    },
    {
      id: 5,
      city: "Ulaanbaatar",
      country: "Mongolia",
      date: "TBD",
      organizer: "Bökh Tradition Society",
      styles: ["Bökh", "Freestyle"],
      status: "planning",
      coordinates: [47.8864, 106.9057],
    },
  ];

  const filteredEvents = filter === "all"
    ? events
    : events.filter(e => e.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-wwwf-olive to-wwwf-peace text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Global Events Map
          </h1>
          <p className="text-xl mb-8">
            Find a WWWF event near you or register your city to host one
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#register" className="wwwf-button bg-white text-wwwf-peace hover:bg-gray-100">
              Register Your City
            </Link>
            <Link href="/organize" className="wwwf-button bg-wwwf-earth text-white hover:bg-opacity-90">
              Organizer Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="wwwf-card bg-gradient-to-br from-wwwf-unity to-gray-100 dark:from-gray-800 dark:to-gray-700 min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-700 dark:text-gray-300">
                Interactive Global Map
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Coming soon: Real-time map with event markers
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Will use Leaflet.js to display all participating cities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & Events List */}
      <section className="py-12 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h2 className="text-3xl font-bold mb-4 sm:mb-0 text-wwwf-earth dark:text-wwwf-clay">
              Participating Cities
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                  filter === "all"
                    ? "bg-wwwf-peace text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                All ({events.length})
              </button>
              <button
                onClick={() => setFilter("planning")}
                className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                  filter === "planning"
                    ? "bg-wwwf-peace text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                Planning
              </button>
              <button
                onClick={() => setFilter("confirmed")}
                className={`px-4 py-2 rounded-md font-semibold transition-colors ${
                  filter === "confirmed"
                    ? "bg-wwwf-peace text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                Confirmed
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="wwwf-card hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-wwwf-earth dark:text-wwwf-clay">
                      {event.city}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{event.country}</p>
                  </div>
                  <span className="px-3 py-1 bg-wwwf-unity dark:bg-gray-700 text-wwwf-earth dark:text-wwwf-clay rounded-full text-sm font-semibold">
                    {event.status}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <span className="text-xl">📅</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Date</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <span className="text-xl">👥</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Organizer</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.organizer}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <span className="text-xl">🤼</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Styles</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {event.styles.join(", ")}
                      </p>
                    </div>
                  </div>
                </div>

                <button className="w-full px-4 py-2 bg-wwwf-peace text-white rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No events found with this filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Register Your City */}
      <section id="register" className="py-16 px-4 bg-gradient-to-br from-wwwf-unity to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-wwwf-earth dark:text-wwwf-clay">
              Register Your City
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Start a WWWF chapter in your community
            </p>
          </div>

          <div className="wwwf-card">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Tokyo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Country *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Japan"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Wrestling Styles (select all that apply)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Freestyle", "Greco-Roman", "Folkstyle", "Sumo", "Laamb", "Bökh", "Kushti", "Yağlı Güreş", "Other"].map((style) => (
                    <label key={style} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-wwwf-peace focus:ring-wwwf-peace" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">
                  Tell us about your event plans
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-wwwf-peace focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Describe your vision for WWWF in your city..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="wwwf-button-primary text-lg"
                >
                  Register Your City
                </button>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  We'll contact you with next steps and resources
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
