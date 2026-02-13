import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About WWWF</h3>
            <p className="text-sm">
              A global citizen-led festival for peace through competition, art, and shared humanity.
            </p>
            <div className="mt-4 text-2xl">🕊️ 🤼‍♂️ 🌍</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/vision" className="hover:text-white transition-colors">
                  Vision & Mission
                </Link>
              </li>
              <li>
                <Link href="/peace-charter" className="hover:text-white transition-colors">
                  Peace Charter
                </Link>
              </li>
              <li>
                <Link href="/organize" className="hover:text-white transition-colors">
                  Organizer Guide
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Find Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/flaukowski/WWWF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <Link href="/media-kit" className="hover:text-white transition-colors">
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="hover:text-white transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@wwwf.org" className="hover:text-white transition-colors">
                  hello@wwwf.org
                </a>
              </li>
              <li className="text-gray-400">Social media coming soon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="mb-2">
            © {new Date().getFullYear()} World Wide Wrestling Festival. Open Source under MIT License.
          </p>
          <p className="text-gray-400 italic">
            "Together, we wrestle for peace."
          </p>
        </div>
      </div>
    </footer>
  );
}
