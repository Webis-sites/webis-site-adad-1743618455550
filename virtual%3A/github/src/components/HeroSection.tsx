'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSectionProps {
  headline: string;
  description: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline = 'חנות ספרים מוביל בישראל',
  description = 'חווית לקוח מושלמת בכל ביקור',
  ctaText = 'קבע תור עכשיו',
}) => {
  // State to track if the component is mounted for animations
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section 
      dir="rtl" 
      className="relative w-full bg-gradient-to-b from-[#f9f3f3] to-white overflow-hidden"
      aria-labelledby="hero-headline"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ 
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4A5A5' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E\")",
          backgroundSize: "20px 20px"
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <div className={`w-full md:w-1/2 text-right transition-opacity duration-700 ease-in-out ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
            <h1 
              id="hero-headline"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: 'var(--font-classic, serif)' }}
            >
              {headline}
            </h1>
            
            <div className="w-20 h-1 bg-[#D4A5A5] mb-6 mr-1"></div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              {description}
            </p>
            
            <div className="flex justify-start">
              <button 
                className="bg-[#D4A5A5] hover:bg-[#c89393] text-white font-bold py-3 px-8 rounded-md shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D4A5A5] focus:ring-opacity-50"
                aria-label={ctaText}
              >
                {ctaText}
              </button>
              
              <button 
                className="mr-4 border-2 border-[#45B7D1] text-[#45B7D1] hover:bg-[#45B7D1] hover:text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#45B7D1] focus:ring-opacity-50"
                aria-label="גלה עוד"
              >
                גלה עוד
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center mt-12 text-gray-500 text-sm">
              <div className="flex items-center ml-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#45B7D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>מבחר עצום של ספרי בישול</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-[#45B7D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>משלוח חינם בקנייה מעל 200₪</span>
              </div>
            </div>
          </div>
          
          {/* Image/Illustration */}
          <div className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative h-[400px] w-full">
              {/* Decorative elements */}
              <div className="absolute top-6 left-6 w-40 h-40 rounded-full bg-[#45B7D1] opacity-10"></div>
              <div className="absolute bottom-6 right-6 w-24 h-24 rounded-full bg-[#D4A5A5] opacity-20"></div>
              
              {/* Main image container with border */}
              <div className="absolute inset-0 bg-white rounded-lg shadow-xl overflow-hidden border-4 border-white">
                {/* Replace with actual image */}
                <div className="relative h-full w-full bg-gray-100">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-[#D4A5A5] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <div className="text-lg font-semibold text-gray-700">חנות ספרים adad</div>
                      <div className="text-sm text-gray-500">ספרי בישול ומזון מהטובים בעולם</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative book icons */}
              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#D4A5A5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#45B7D1]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;