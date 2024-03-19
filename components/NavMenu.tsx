'use client';
import { useState } from 'react';

export default function NavMenu() {
  const [navbar, setNavbar] = useState(false);
  function toggleNavbarContent() {
    const navbarContent = document.getElementById('navbarContent');
    if (navbarContent) {
      navbarContent.style.display = navbarContent.style.display === 'none' ? '' : 'none';
    }
  }

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
          <div className={`mt-8 flex-1 justify-self-center pb-3 ${navbar ? 'block' : 'hidden'}`}>
            <ul className="items-center justify-center space-y-8">
              <li className="text-gray-600 hover:underline">
                <a href="javascript:void(0)">Home</a>
              </li>
              <li className="text-gray-600 hover:underline">
                <a href="javascript:void(0)">FAQ</a>
              </li>
              <li className="text-gray-600 hover:underline">
                <a href="javascript:void(0)">About us</a>
              </li>
              <li className="text-gray-600 hover:underline">
                <a href="javascript:void(0)">Cross Pendant</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
