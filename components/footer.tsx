'use client';
import Link from 'next/link';
import { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (email) {
      try {
        const response = await fetch('/api/customer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email })
        });
        const data = await response.json();
      } catch (error) {
        setEmail('');
        console.error('Error:', error);
      }
    } else {
      setEmail('');
      console.error('Email is undefined or empty');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="-mx-4 flex flex-wrap">
        <div className="mb-6 w-full px-4 md:mb-0 md:w-1/5">
          <h2 className="flex justify-center text-lg font-semibold md:flex-none md:justify-normal">
            DESIGNED IN
          </h2>
          <div className="flex justify-center px-6 py-2 text-lg md:flex-none md:justify-normal">
            <span className="ml-2 font-semibold text-white">INDIA</span>
          </div>
          <div className="flex justify-center md:flex-none md:justify-normal">
            <img
              src="/india.webp"
              alt="India Flag"
              className="ml-0 mr-0 inline-block border border-black md:ml-11 md:mr-2"
              style={{ width: '20px', height: 'auto' }}
            />
          </div>
        </div>

        <div className="mb-6 w-full px-4 md:mb-0 md:w-1/5">
          <h3 className="mb-4 font-semibold">Support</h3>
          <ul>
            <Link className="mb-2 hover:underline" href="/contact">
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="mb-6 w-full px-4 md:mb-0 md:w-1/5">
          <h3 className="mb-4 font-semibold">About Us</h3>
          <ul>
            <Link className="mb-2 hover:underline" href="/about">
              OUR STORY
            </Link>
          </ul>
        </div>
        <div className="-mt-1 w-full px-4 text-white md:w-1/5">
          <h3 className="mb-4 font-semibold">Product News & Discounts</h3>
          <div className="mb-4 flex items-end">
            <form onSubmit={handleSubmit} className="mb-4 flex items-end">
              <input
                required
                type="email"
                placeholder="Enter your email here"
                className="w-5/5 mr-2 border-b border-white bg-transparent py-2 text-white placeholder-white focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="flex items-center justify-center bg-transparent p-2 text-white hover:text-gray-300 focus:outline-none"
              >
                <BsChevronRight className="font-light" size="24" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between border-t border-white pt-4">
        <div className="text-sm">&copy;2024 MPECS</div>
        <div className="text-sm">
          {/* <a href="#" className="mr-4">
            PRIVACY POLICY
          </a>
          <a href="#" className="mr-4">
            TERMS & CONDITIONS
          </a> */}
          <a href="#" className="mr-4">
            mpecspl@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
