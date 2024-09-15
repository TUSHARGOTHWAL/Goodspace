import React, { useState } from 'react';

function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      phoneNumber,
      email,
      companyName,
    });
  };

  return (
    <div className="bg-gray-100 py-8 sm:py-14 mx-4 sm:mx-20 my-8 sm:my-12 rounded-lg">
    <div className="max-w-md mx-auto px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Ready to hire 10X faster?</h2>
      <p className="text-center mb-6 text-gray-600">We'd love to connect</p>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              className="text-xs shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              className="text-xs shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex">
            <input
              type="text"
              className="text-xs shadow-sm appearance-none border border-gray-300 rounded-l-lg w-24 py-5 px-4 text-gray-700 leading-tight focus:outline-none"
              value="IN +91"
              readOnly
            />
            <input
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              className="text-xs shadow-sm appearance-none border border-gray-300 rounded-r-lg w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="text-xs shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="companyName"
            placeholder="Company Name"
            className="text-xs shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-5 px-4 text-gray-700 leading-tight focus:outline-none"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="bg-sky-700 hover:bg-sky-600 text-white font-bold py-4 px-6 rounded-lg focus:outline-none w-full relative overflow-hidden group"
          >
            <span className="relative z-10">Book Demo</span>
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out -skew-x-12"></span>
          </button>
        </div>
      </form>
    </div>
  </div>
  );
}

export default ContactForm;
