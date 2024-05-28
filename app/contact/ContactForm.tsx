'use client';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const notify = () => toast('Email sent!');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Support Mail');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // let isValidForm = handleValidation();

    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      toast('Error!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      });
      return;
    }
    toast('Email sent!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    });
    setFullname('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="flex flex-col bg-[#f2f2f2] md:flex-row">
      <div className="flex-1 pb-10 pl-10 pr-10 pt-2">
        <h1 className="fade-in4 mb-4 text-6xl font-medium">Contact</h1>
        <p className="fade-in4 mb-10 text-xl text-gray-500">Email us for any Inquiries.</p>
        <div className="mb-6">
          <h2 className="fade-in4 mb-4 text-2xl font-semibold">Inquiry Form</h2>
          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
              required
              className="fade-in41 mb-4 w-full border border-black bg-[#fff] p-4 text-black md:mr-9 md:w-[47%] 2xl:mr-16"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="fade-in42 mb-4 w-full border border-black bg-[#fff] p-4 text-black md:w-[47%]"
            />
            <textarea
              placeholder="Message"
              value={message}
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="fade-in43 mb-4 w-full border border-black bg-[#fff] p-4 text-black"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="fade-in44 w-full bg-black p-4 text-white hover:bg-gray-700"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
      <div className="fade-in4 relative mb-10 flex pl-10 pr-10">
        <div className="mt-14 -translate-y-12 overflow-hidden rounded-3xl bg-gray-200">
          <div className="mt-4 h-auto w-full md:h-[560px] md:w-[650px]">
            <img
              src="/mpecs-logo.png"
              alt="Mpecs company logo"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ContactForm;
