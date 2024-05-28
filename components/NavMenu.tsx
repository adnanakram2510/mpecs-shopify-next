'use client';
import { Lato } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

const lato = Lato({
  subsets: ['latin'],
  weight: '400'
});

export default function NavMenu() {
  const [navbar, setNavbar] = useState(false);
  const handleLinkClick = () => {
    setNavbar(false);
  };
  return (
    <nav className="w-full bg-white">
      <div className="font-lato mx-auto justify-start px-4">
        <div>
          <div className="flex items-center justify-between">
            <div className="">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`absolute mt-8 flex-1 justify-self-center pb-3 ${
              navbar ? 'block' : 'hidden'
            } z-50`}
          >
            <ul className="items-center justify-center space-y-8 rounded-lg bg-white p-4 opacity-100 shadow-md">
              <li className="text-gray-600 hover:underline">
                <Link href="/" onClick={handleLinkClick}>
                  <span className={lato.className}>Home</span>
                </Link>
              </li>
              <li className="text-gray-600 hover:underline">
                <Link href="/faq" onClick={handleLinkClick}>
                  <span className={lato.className}>FAQ</span>
                </Link>
              </li>
              <li className="text-gray-600 hover:underline">
                <Link href="/about" onClick={handleLinkClick}>
                  <span className={lato.className}>About</span>
                </Link>
              </li>
              <li className="text-gray-600 hover:underline">
                <Link href="/contact" onClick={handleLinkClick}>
                  <span className={lato.className}>Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
