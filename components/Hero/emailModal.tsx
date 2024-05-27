'use client';
import React from 'react';
import { IoClose } from 'react-icons/io5';
import '../../app/globals.css';

function emailModal() {
  const [showModal, setShowModal] = React.useState(true);
  React.useEffect(() => {
    const isFirstVisit = !localStorage.getItem('hasVisited');
    if (isFirstVisit) {
      setShowModal(true);
      localStorage.setItem('hasVisited', 'true');
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Form submitted');
    closeModal();
  };

  return (
    <div
      id="modal-container"
      className="fade-in font-lato fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 text-black"
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
        <h2 className="mb-2 text-4xl font-bold uppercase">MPECS</h2>
        <h3 className="mb-4 text-2xl">Hey There! </h3>
        <p className="mb-4">Sign up for news, events, and product announcements.</p>
        <form onSubmit={handleSubmit}>
          <input
            required
            type="email"
            placeholder="EMAIL"
            className="mb-4 w-full border-2 border-gray-300 p-3"
          />
          <button type="submit" className="w-full bg-gray-800 p-3 text-white">
            START YOUR JOURNEY
          </button>
        </form>
      </div>
    </div>
  );
}

export default emailModal;
