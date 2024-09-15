import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Marquee from "react-fast-marquee";
import AIRecruitmentTools from './components/AIRecruitmentTools';
import Faqs from './components/Faqs';
import ContactForm from './components/ContactForm';
import { ChevronDown } from 'lucide-react';

// Importing Images because it was not showing normally after deploying so have to import it

import googleCloud from '/public/google-cloud.svg';
import mastercard from '/public/mastercard.svg';
import reactLogo from '/public/react.svg';
import bitcoin from '/public/bitcoin.svg';
import polygon from '/public/Polygon.png';
import apple from '/public/apple.svg';
import solana from '/public/Solana.png';
import downloadQR from '/public/download.png';
import downloadHand from '/public/downloadhand-78c6f78a.png';
import demoVideo from '/public/GoodSpace Demo Video.mp4';
import postajob from '/public/postajob-911f0b67.png';
import jobseeker from '/public/jobseeker-14460b31.png';
import interview from '/public/interview-d4b2b690.png'
import yourhires from '/public/yourhires-3c205e8d.png';
import playstore from '/public/playstore.png';
import appstore from '/public/appstore.png';

const countryCodes = [
  { code: 'IN', dialCode: '+91', label: 'IN +91' },
  { code: 'US', dialCode: '+1', label: 'US +1' },
  { code: 'UK', dialCode: '+44', label: 'UK +44' },
];

function App() {
  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('IN +91');
  const countryCodeRef = useRef(null);

  const toggleCountryCode = () => setIsCountryCodeOpen(!isCountryCodeOpen);

  const handleClickOutside = (event) => {
    if (countryCodeRef.current && !countryCodeRef.current.contains(event.target)) {
      setIsCountryCodeOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountryCodeSelect = (label) => {
    setSelectedCountryCode(label);
    setIsCountryCodeOpen(false);
  };


  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      if (videoElement) {
        const rect = videoElement.getBoundingClientRect();
        const inView = rect.bottom < window.innerHeight ;
        setIsVisible(inView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar />
      <div className="mt-16 px-4">
  <div className="text-center">
    <span className="text-sky-700 text-xl sm:text-2xl md:text-3xl lg:text-sm">✨ World's First AI Recruiter</span>
    <br />
    <br />
    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">Close Your Hiring</span>
    <br />
    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mt-4">
      in less than <span className="text-sky-600">24 Hours</span>
    </span>
  </div>
  <div className="text-center mt-8">
    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg">
      An AI-powered recruiting platform that sources, shortlists, interviews, and brand evaluates potential
      <br />
      candidates specific to your hiring needs - in just a day!
    </p>
  </div>
    
  <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 px-4 sm:px-0">
      <div className="bg-white shadow-sm rounded-lg p-2 flex flex-col sm:flex-row items-center border border-gray-200 w-full sm:w-auto mb-4 sm:mb-0">
        <div className="relative w-full sm:w-auto mb-2 sm:mb-0" ref={countryCodeRef}>
          <button
            onClick={toggleCountryCode}
            className="flex items-center justify-between px-4 py-2 text-gray-700 focus:outline-none w-full sm:w-auto "
          >
            {selectedCountryCode}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isCountryCodeOpen && (
            <div className="absolute bg-white shadow-md rounded-md w-full sm:w-auto z-10">
              <div className="py-1">
                {countryCodes.map(({ label }) => (
                  <button
                    key={label}
                    onClick={() => handleCountryCodeSelect(label)}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left "
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Enter your contact number"
          className="px-4 py-2 focus:outline-none w-full"
        />
      </div>
      <button className="bg-sky-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md sm:ml-4 relative overflow-hidden group w-full sm:w-auto">
        <span className="relative z-10">Start Hiring</span>
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-25 transform -translate-x-full group-hover:translate-x-full transition-transform duration-300 ease-out -skew-x-12"></span>
      </button>
    </div>

          <div className="flex justify-center mt-96">
      <div className="relative bg-gray-100 rounded-xl w-11/12 max-w-6xl h-96 px-4 pt-32 pb-8">
        <video
          ref={videoRef}
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-full max-w-4xl rounded-3xl z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          controls
        >
          <source src={demoVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mt-16">
          <Marquee speed={50} pauseOnClick>
            <div className="flex flex-wrap gap-20 mt-20">
              <a href="https://www.hdfcbank.com/">
                <img src={googleCloud} alt="HDFC Bank" className="h-20" />
              </a>
              <a href="https://www.genpact.com/">
                <img src={mastercard} alt="Genpact" className="h-20" />
              </a>
              <a href="https://www2.deloitte.com/us/en.html">
                <img src={reactLogo} alt="Deloitte" className="h-20" />
              </a>
              <a href="https://www.cognizant.com/">
                <img src={bitcoin} alt="Cognizant" className="h-20" />
              </a>
              <a href="https://paytm.com/">
                <img src={polygon} alt="Paytm" className="h-20" />
              </a>
              <a href="https://www.mobikwik.com/">
                <img src={apple} alt="Mobikwik" className="h-20" />
              </a>
              <a href="https://www.zoho.com/">
                <img src={solana} alt="Zoho" className="h-20" />
              </a>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
</div>



<AIRecruitmentTools />
<div className="bg-gray-100 p-4 sm:p-8 rounded-lg max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-6 md:space-y-0">

        <div className="p-2 sm:p-6 w-full md:w-1/2">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-center md:text-left">
            Find your next hire today.
          </h1>
          <div className="flex flex-col sm:flex-row items-center mb-4 space-y-4 sm:space-y-0">
            <div className="relative w-full sm:w-auto" ref={countryCodeRef}>
              <button
                onClick={toggleCountryCode}
                className="flex items-center justify-between px-4 py-2 text-gray-700 focus:outline-none w-full sm:w-auto"
              >
                {selectedCountryCode}
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>
              {isCountryCodeOpen && (
                <div className="absolute bg-white border border-gray-200 mt-1 w-full z-10">
                  <div className="py-1">
                    {countryCodes.map(({ label }) => (
                      <button
                        key={label}
                        onClick={() => handleCountryCodeSelect(label)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Enter your contact number"
              className="px-4 py-5 focus:outline-none w-full sm:min-w-96 mt-2 sm:mt-0 sm:ml-2"
            />
            <button className="bg-sky-700 text-white font-bold py-2 px-6 w-full sm:w-auto sm:ml-2 mt-2 sm:mt-0">
              Start Hiring
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:ml-36 mt-6 md:mt-0">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-sky-700 text-center">30%</p>
              <p className="text-sm text-gray-600 mt-4 text-center">Increase in candidate applications per job</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-sky-700 text-center">5 hrs+</p>
              <p className="text-sm text-gray-600 mt-4 text-center">Time saved per day per recruiter</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-sky-700 text-center">10X</p>
              <p className="text-sm text-gray-600 mt-4 text-center">Improved candidate quality per job</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-sky-700 text-center">1/10th</p>
              <p className="text-sm text-gray-600 mt-4 text-center">The cost per job per recruiter</p>
            </div>
          </div>
        </div>
      </div>
    </div>



<div className="relative">
      <div className="sticky top-0 h-auto sm:h-96 mb-0 pb-0 flex flex-col md:flex-row-reverse items-center justify-normal mt-8 sm:mt-36">
        <div className="w-full md:w-1/2 flex justify-center order-last md:order-first">
          <img src={postajob} alt="Post a job" className="h-64 w-48 sm:h-80 sm:w-64 object-fit -mb-8 sm:-mb-16" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 md:ml-36 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-5xl text-sky-700 font-bold mb-4">Post your job on GoodSpace in seconds</h2>
          <p className="text-sm sm:text-base">We prioritize your hiring requirements over everything else. You define what you need and we deliver!</p>
        </div>
      </div>

      <div className="sticky top-0 h-auto sm:h-96 mb-0 pb-0 flex flex-col md:flex-row items-center justify-normal bg-gradient-to-br from-sky-600 via-sky-700 to-sky-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black/5 to-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent"></div>
        <div className="w-full md:w-1/2 flex justify-center relative z-10 order-last md:order-first">
          <img src={jobseeker} alt="Job seeker" className="h-64 w-48 sm:h-80 sm:w-64 object-fit -mb-8 sm:-mb-16" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 relative z-10 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-5xl text-white font-bold mb-4">Get shortlisted candidates within a day</h2>
          <p className="text-sm sm:text-base text-white">You sit back and relax while we source and shortlist high quality potential candidates for you!</p>
        </div>
      </div>

      <div className="sticky top-0 h-auto sm:h-96 mb-0 pb-0 flex flex-col md:flex-row-reverse items-center justify-normal mt-8 sm:mt-36 bg-white">
        <div className="w-full md:w-1/2 flex justify-center order-last md:order-first">
          <img src={interview} alt="Interview" className="h-64 w-48 sm:h-80 sm:w-64 object-fit -mb-8 sm:-mb-16" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 md:ml-36 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-5xl text-sky-700 font-bold mb-4">You are all set to find your next hire</h2>
          <p className="text-sm sm:text-base">Shortlisted candidates are great, but interviewed candidates are better. These are your perfect match!</p>
        </div>
      </div>

      <div className="sticky top-0 h-auto sm:h-96 mb-0 pb-0 flex flex-col md:flex-row items-center justify-normal bg-sky-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-sky-800/30 to-sky-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"></div>
        <div className="w-full md:w-1/2 flex justify-center relative z-10 order-last md:order-first">
          <img src={yourhires} alt="Your hires" className="h-64 w-48 sm:h-80 sm:w-64 object-fit -mb-8 sm:-mb-16" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center p-4 sm:p-6 relative z-10 mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-5xl text-white font-bold mb-4">Get shortlisted candidates within a day</h2>
          <p className="text-sm sm:text-base text-white">You get top candidates faster than ever. You hire them faster than ever. No delayed hiring for you, ever again!</p>
        </div>
      </div>
    </div>


    <div className="bg-gray-100 py-10 m-4 sm:m-20 rounded-xl">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col space-y-6 lg:ml-24 lg:mt-14 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 text-center lg:text-left">
            Experience the <span className="text-sky-700">GoodSpace</span> app on mobile
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src={playstore}
                alt="Google Play Store"
                className="w-40"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src={appstore}
                alt="App Store"
                className="w-40"
              />
            </a>
          </div>
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <img src={downloadQR} alt="QR Code" className="w-24 h-24" />
          </div>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={downloadHand}
            alt="Mobile App"
            className="object-cover w-full h-64 sm:h-80 lg:h-96 -mb-8 lg:-mb-16"
          />
        </div>
      </div>
    </div>


      <Faqs />

      <ContactForm />

      <footer className="bg-gradient-to-r from-sky-950 via-sky-700 to-sky-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-14 mb-8 md:mb-14">
          <div className="mb-6 md:mb-0 md:ml-0 lg:ml-28">
            <h3 className="text-3xl font-bold">goodspace</h3>
            <p className="text-sm mt-2">World's 1st AI Recruitment Platform</p>
            <div className="flex mt-8 space-x-4">
              <a href="mailto:info@goodspace.al" className="text-white hover:text-sky-200">
                <img src="#" alt="" />
              </a>
              <a href="https://www.instagram.com/" className="text-white hover:text-sky-200">
                <img src="#" alt="" />
              </a>
              <a href="https://www.linkedin.com/" className="text-white hover:text-sky-200">
                <img src="#" alt="" />
              </a>
            </div>
            <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} GoodSpace AI. All rights reserved worldwide.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-20 md:mr-0 lg:mr-28">
            <div className="mb-6 md:mb-0">
              <h3 className="text-md font-bold">Hire by Location</h3>
              <ul className="mt-2 text-sm space-y-1">
                {["Delhi", "Mumbai", "Gurugram", "Noida", "Pune", "Kolkata", "Chandigarh", "Hyderabad"].map((city) => (
                  <li key={city}>Hiring in {city}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-md font-bold">Hire by Designation</h3>
              <ul className="mt-2 text-sm space-y-1">
                {["Sales Executive", "Marketing Executive", "Java Developer", "Business Analyst", "Digital Marketing Executive", "Android Developers", "Javascript Developer"].map((role) => (
                  <li key={role}>Hire {role}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-md font-bold">Company</h3>
              <ul className="mt-2 text-sm space-y-1">
                {["About Us", "Our Team", "Careers", "Contact Us", "Blogs", "Press Room", "Find Blood Donors"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-md font-bold">Legal</h3>
              <ul className="mt-2 text-sm space-y-1">
                {["Terms of Use", "Privacy Policy", "Cookie Policy", "Refund Policy"].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>    </>
  );
}

export default App;
