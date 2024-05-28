'use client';
import React from 'react';
import { IoCheckmarkCircle, IoClose } from 'react-icons/io5';
import '../../app/globals.css';

function emailModal() {
  const [showModal, setShowModal] = React.useState(true);
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  React.useEffect(() => {
    const isAlreadySubscribed = localStorage.getItem('subscribed') === 'true';
    if (isAlreadySubscribed) {
      setShowModal(true);
    }
  }, []);

  if (!showModal) {
    return null;
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).id === 'modal-container') {
      closeModal();
    }
  };

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
        localStorage.setItem('subscribed', 'true');
        setIsSubscribed(true);
        setTimeout(() => {
          setShowModal(false);
          setEmail('');
        }, 2000);
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
    <div
      id="modal-container"
      className="fade-in font-lato fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div
        className="relative rounded-lg bg-white p-8 shadow-lg"
        style={{ width: '500px' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-0 top-0 mr-4 mt-4 text-gray-800"
          onClick={() => setShowModal(false)}
        >
          <IoClose />
        </button>
        {isSubscribed ? (
          <div className="fade-in">
            <h2 className="mb-2 text-4xl font-bold uppercase text-black">MPECS</h2>
            <div className="">
              <h3 className="text-xl font-normal text-black">
                Thank you for subscribing, you will be emailed an exclusive discount shortly.
              </h3>
            </div>
            <IoCheckmarkCircle className="mx-auto my-2 animate-pulse text-lg text-green-500" />
          </div>
        ) : (
          <>
            <h2 className="mb-2 text-4xl font-bold uppercase text-black">MPECS</h2>
            <h3 className="mb-4 text-2xl text-black">Hey There! Here's 20% Off.</h3>
            <p className="mb-4 text-black">
              Sign up for news, events, and product announcements and receive 20% off your next
              order!
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL"
                className="mb-4 w-full border-2 border-gray-300 bg-white p-3 text-black"
              />
              <button className="w-full bg-gray-800 p-3 text-white">START YOUR JOURNEY</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default emailModal;
