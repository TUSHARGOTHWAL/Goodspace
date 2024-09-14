import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import Marquee from "react-fast-marquee";
import AIRecruitmentTools from './components/AIRecruitmentTools';
import Faqs from './components/Faqs';
import ContactForm from './components/ContactForm';

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

  return (
    <>
      <Navbar />
      <div className="mt-16">
        <div className="text-center">
          <span className="text-blue-500">✨ Worlds first AI recruiter</span>
          <br />
          <span className="text-7xl font-bold text-gray-800">Close your hiring</span>
          <br />
          <span className="text-7xl font-bold text-gray-800 mt-4">
            in less than <span className="text-blue-500">24 Hours</span>
          </span>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600 text-lg">
            An AI-powered recruiting platform that sources, shortlists, interviews, and evaluates potential candidates specific to your hiring needs - in just a day!
          </p>
        </div>
        <div className="flex justify-center items-center mt-12 ">
          <div className="bg-white shadow-md rounded-lg p-4 flex items-center">
            <div className="relative" ref={countryCodeRef}>
              <button
                onClick={toggleCountryCode}
                className="flex items-center px-4 py-2 text-gray-700 focus:outline-none">
                {selectedCountryCode}
              </button>
              {isCountryCodeOpen && (
                <div className="absolute bg-white">
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
              className="px-4 py-2 focus:outline-none"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg ml-4">
            Start Hiring
          </button>
        </div>

        <div className="flex justify-center mt-96 ">
      <div className="relative bg-slate-100 rounded-xl w-11/12 max-w-6xl h-96 px-4 pt-32 pb-8">
        <video 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2/3 w-full max-w-4xl rounded-3xl z-10"
          controls
        >
          <source src="public/GoodSpace Demo Video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="mt-16">
          <Marquee speed={50} pauseOnClick>
            <div className="flex flex-wrap gap-20 mt-20">
              <a href="https://www.hdfcbank.com/">
                <img src="public/google-cloud.svg" alt="HDFC Bank" className="h-20" />
              </a>
              <a href="https://www.genpact.com/">
                <img src="public/mastercard.svg" alt="Genpact" className="h-20" />
              </a>
              <a href="https://www2.deloitte.com/us/en.html">
                <img src="public/react.svg" alt="Deloitte" className="h-20" />
              </a>
              <a href="https://www.cognizant.com/">
                <img src="public/bitcoin.svg" alt="Cognizant" className="h-20" />
              </a>
              <a href="https://paytm.com/">
                <img src="public/Polygon.png" alt="Paytm" className="h-20" />
              </a>
              <a href="https://www.mobikwik.com/">
                <img src="public/apple.svg" alt="Mobikwik" className="h-20" />
              </a>
              <a href="https://www.zoho.com/">
                <img src="public/Solana.png" alt="Zoho" className="h-20" />
              </a>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
      </div>

<AIRecruitmentTools></AIRecruitmentTools>

<div className="bg-gray-100 p-8 rounded-lg max-w-7xl mx-auto ">

  <div className="flex flex-column md:flex-row justify-between items-start md:items-center mb-6 space-y-6 md:space-y-0">
    {/* Left Side: Contact Form */}
    <div className=" p-6 w-full md:w-1/2">
  <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center md:text-left">
    Find your next hire today.
  </h1>
      <div className="flex items-center mb-4">
        <div className="relative" ref={countryCodeRef}>
        <button
                onClick={toggleCountryCode}
                className="flex items-center px-4 py-2 text-gray-700 focus:outline-none">
                {selectedCountryCode}
              </button>
              {isCountryCodeOpen && (
                <div className="absolute  bg-white ">
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
              className=" px-4 py-5  focus:outline-none min-w-96"
            />
          <button className=" bg-sky-700  text-white font-bold py-2 px-6  ml-4">
            Start Hiring
          </button>
          </div>
    </div>
    {/* Right Side: Statistics */}
    <div className="w-full md:w-1/2 ml-36">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-5xl font-bold  text-sky-700  text-center">30%</p>
          <p className="text-sm text-gray-600 mt-4">Increase in candidate applications per job</p>
        </div>
        <div>
          <p className="text-5xl font-bold text-sky-700 text-center">5 hrs+</p>
          <p className="text-sm text-gray-600 mt-4">Time saved per day per recruiter</p>
        </div>
        <div>
          <p className="text-5xl font-bold  text-sky-700  text-center">10X</p>
          <p className="text-sm text-gray-600 mt-4">Improved candidate quality per job</p>
        </div>
        <div>
          <p className="text-5xl font-bold  text-sky-700  text-center">1/10th</p>
          <p className="text-sm text-gray-600 mt-4">The cost per job per recruiter</p>
        </div>
      </div>
    </div>
    </div>
</div>




<div class="relative">
    <div class="sticky top-0 h-96 mb-0 pb-0 flex flex-col md:flex-row-reverse items-center justify-normal mt-36">
    <div class="w-full md:w-1/2 flex justify-center">
            <img src="public/jobseeker-14460b31.png" alt="First Image" class="h-80 w-64 object-fit"/>
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-start justify-center p-6 ml-36">
        <h2 class="text-5xl text-sky-700 font-bold">Post your job on GoodSpace
            in seconds</h2>     <br />
            <p>We prioritize your hiring requirements over everything else. You define what you need and we deliver!</p>
        </div>

    </div>
    
    <div class="sticky top-0 h-96 mb-0 pb-0 flex flex-col md:flex-row items-center justify-normal bg-sky-700">
        

        <div class="w-full md:w-1/2 flex justify-center">
            <img src="public/jobseeker-14460b31.png" alt="Second Image" class="h-80 w-64 object-fit"/>
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-start justify-center p-6 ">
            <h2 class="text-5xl text-white font-bold">Get shortlisted candidates
            within a day</h2>     <br />
            <p class="text-white">You sit back and relax while we source and shortlist high quality potential candidates for you!</p>
        </div>
    </div>
    
    <div class="sticky top-0 h-96 mb-0 pb-0 flex flex-col md:flex-row-reverse items-center justify-normal mt-36 bg-white">
    <div class="w-full md:w-1/2 flex justify-center">
            <img src="public/jobseeker-14460b31.png" alt="First Image" class="h-80 w-64 object-fit"/>
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-start justify-center p-6 ml-36">
        <h2 class="text-5xl text-sky-700 font-bold">You are all set to find
        your next hire</h2>
        <br />
            <p>Shortlisted candidates are great, but interviewed candidates are better. These are your perfect match!</p>
        </div>

    </div>
    
    <div class="sticky top-0 h-96 mb-0 pb-0 flex flex-col md:flex-row items-center justify-normal  bg-sky-700">
        

        <div class="w-full md:w-1/2 flex justify-center">
            <img src="public/jobseeker-14460b31.png" alt="Second Image" class="h-80 w-64 object-fit"/>
        </div>
        <div class="w-full md:w-1/2 flex flex-col items-start justify-center p-6">
            <h2 class="text-5xl text-white font-bold">Get shortlisted candidates
            within a day</h2>     <br />
            <p class="text-white">You get top candidates faster than ever. You hire them faster than ever. No delayed hiring for you, ever again!</p>
        </div>
    </div>
    
</div>





<div className="bg-gray-100 py-10 m-20 rounded-xl">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col space-y-6 ml-24 mt-14">
          <h1 className="text-6xl font-bold text-gray-800">
            Experience the <span className="text-blue-600">GoodSpace</span> app
            on mobile
          </h1>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Google Play Button */}
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play Store"
                className="w-40"
              />
            </a>
            {/* App Store Button */}
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Download_on_the_App_Store_Badge.svg"
                alt="App Store"
                className="w-40"
              />
            </a>
          </div>
          {/* QR Code */}
          <div className="flex items-center space-x-4">
            <img src='public/download.png' alt="QR Code" className="w-24 h-24" />
          </div>
        </div>

        {/* Right Side - Mobile Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="public/downloadhand-78c6f78a.png"
            alt="Mobile App"
            className=" object-cover w-full h-96 -mb-16"
          />
        </div>
      </div>
    </div>


<Faqs>
</Faqs>


<ContactForm></ContactForm>





<footer className="bg-sky-900 text-white py-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row   
 justify-between mt-14 mb-14">
          <div className="mb-6 md:mb-0 ml-28">
            <h3 className="text-3xl font-bold">goodspace</h3>
            <p className="text-sm mt-2">World's 1st AI Recruitment Platform</p>
            <div className="flex-col mt-8">
              <a href="mailto:info@goodspace.al" className="mr-4">
                <img src="" alt="mail" />
              </a>
              <a href="https://www.instagram.com/" className="mr-4">
                <img src="" alt="insta" />
              </a>
              <a href="https://www.linkedin.com/" className="mr-4">
                <img src="" alt="linkedin" />
              </a>
            </div>
            <p className="text-center mt-4 text-sm">&copy; 2024 GoodSpace AI. All rights reserved worldwide.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-20 mr-28" >
            <div className="mb-6 md:mr-6">
              <h3 className="text-md font-bold">Hire by Location</h3>
              <ul className="mt-2 text-sm">
                <li>Hiring in Delhi</li>
                <li>Hiring in Mumbai</li>
                <li>Hiring in Gurugram</li>
                <li>Hiring in Noida</li>
                <li>Hiring in Pune</li>
                <li>Hiring in Kolkata</li>
                <li>Hiring in Chandigarh</li>
                <li>Hiring in Hyderabad</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-bold">Hire by Designation</h3>
              <ul className="mt-2 text-sm">
                <li>Hire Sales Executive</li>
                <li>Hire Marketing Executive</li>
                <li>Hire Java Developer</li>
                <li>Hire Business Analyst</li>
                <li>Hire Digital Marketing Executive</li>
                <li>Hire Android Developers</li>
                <li>Hire Javascript Developer</li>
              </ul>
            </div>
            <div className="mb-6 md:mr-6">
              <h3 className="text-md font-bold">Company</h3>
              <ul className="mt-2 text-sm">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>Blogs</li>
                <li>Press Room</li>
                <li>Find Blood Donors</li>
              </ul>
            </div>
            <div>
              <h3 className="text-md font-bold">Legal</h3>
              <ul className="mt-2 text-sm">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
          </div>
        
    </footer>
    </>
  );
}

export default App;
