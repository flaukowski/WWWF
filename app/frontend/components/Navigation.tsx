"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-3xl">🤼</span>
              <span className="font-bold text-xl text-wwwf-earth">WWWF</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-wwwf-peace transition-colors">
              Home
            </Link>
            <Link href="/vision" className="hover:text-wwwf-peace transition-colors">
              Vision
            </Link>
            <Link href="/peace-charter" className="hover:text-wwwf-peace transition-colors">
              Peace Charter
            </Link>
            <Link href="/events" className="hover:text-wwwf-peace transition-colors">
              Events
            </Link>
            <Link href="/organize" className="hover:text-wwwf-peace transition-colors">
              Organize
            </Link>
            <Link
              href="/peace-charter"
              className="wwwf-button-primary"
            >
              Sign Charter
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-wwwf-peace"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Home
            </Link>
            <Link
              href="/vision"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Vision
            </Link>
            <Link
              href="/peace-charter"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Peace Charter
            </Link>
            <Link
              href="/events"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Events
            </Link>
            <Link
              href="/organize"
              className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Organize
            </Link>
            <Link
              href="/peace-charter"
              className="block px-3 py-2 rounded-md bg-wwwf-peace text-white text-center"
            >
              Sign Charter
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
