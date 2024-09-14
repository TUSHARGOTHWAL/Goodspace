import React, { useState } from 'react';

const Faq = () => {
  const [faqs] = useState([
    {
      question: 'What is GoodSpace?',
      answer:
        'Goodspace is your AI-powered recruitment platform that helps you find, shortlist and interview candidates, all within 24 hours! It acts as an extension to your talent acquisition team to hire faster, efficiently and smartly.',
    },
    {
      question: 'Why is GoodSpace the best hiring platform for recruiters in India?',
      answer: 'Answer to question 2',
    },
    {
      question: 'Can I post jobs for free on GoodSpace?',
      answer: 'Answer to question 3',
    },
    {
      question: 'How do you ensure quality candidate applications for my job?',
      answer: 'Answer to question 4',
    },
    {
      question: 'I have bulk hiring requirements. Whom should I talk to?',
      answer: 'Answer to question 5',
    },
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="container mx-auto p-4 text-center mt-28  w-8/12 mb-32">
      <h2 className="text-3xl font-bold mb-8">FAQ</h2>
      <div className="grid grid-cols-1 gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" rounded-lg p-4 cursor-pointer bg-slate-100"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-medium">{faq.question}</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    activeIndex === index
                      ? 'M18 12H6'
                      : 'M12 15l-3-3m0 0l3-3m-3 3h6'
                  }
                />
              </svg>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700 text-left">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;