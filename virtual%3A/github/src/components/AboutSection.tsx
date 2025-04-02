import { FC } from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  className?: string;
}

/**
 * AboutSection component for 'adad' bookstore
 * Displays information about the bookstore with RTL support
 */
const AboutSection: FC<AboutSectionProps> = ({ className = '' }) => {
  return (
    <section 
      dir="rtl" 
      className={`py-16 bg-gradient-to-br from-white to-gray-100 ${className}`}
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h2 
              id="about-heading" 
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 font-serif"
              style={{ color: '#D4A5A5' }}
            >
              אודות חנות הספרים "adad"
            </h2>
            
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              אנחנו חנות ספרים מוביל בתחום הטכנולוגיה עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                  style={{ backgroundColor: '#45B7D1' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">התמחות בספרי מזון</h3>
                  <p className="text-gray-600">אנו מציעים מגוון רחב של ספרי בישול, תזונה, ומסעדנות מהארץ ומהעולם</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                  style={{ backgroundColor: '#45B7D1' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">שירות מקצועי</h3>
                  <p className="text-gray-600">צוות המומחים שלנו זמין לייעץ ולהמליץ על הספרים המתאימים ביותר לצרכים שלך</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4"
                  style={{ backgroundColor: '#45B7D1' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-800">ניסיון רב שנים</h3>
                  <p className="text-gray-600">עם למעלה מ-20 שנות ניסיון, אנו מביאים את הידע והמומחיות לכל לקוח</p>
                </div>
              </div>
            </div>
            
            <button 
              className="mt-8 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 text-white"
              style={{ backgroundColor: '#D4A5A5', borderColor: '#D4A5A5' }}
              aria-label="צור קשר עם צוות החנות"
            >
              צור קשר
            </button>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative h-80 md:h-96 lg:h-[500px] w-full overflow-hidden rounded-lg shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <div 
                className="w-full h-full bg-gray-200 flex items-center justify-center"
                style={{ backgroundColor: 'rgba(212, 165, 165, 0.1)' }}
              >
                <div className="relative w-full h-full">
                  {/* Placeholder for actual image - in production replace with actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  {/* In production, use this Image component with actual image */}
                  {/* 
                  <Image
                    src="/images/bookstore.jpg"
                    alt="חנות הספרים adad - מראה פנימי של החנות"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    priority
                  />
                  */}
                </div>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-5 -left-5 md:-bottom-8 md:-left-8 p-4 md:p-6 rounded-lg shadow-lg z-20"
              style={{ backgroundColor: '#45B7D1' }}
            >
              <p className="text-white font-bold text-lg md:text-xl">20+</p>
              <p className="text-white text-sm md:text-base">שנות ניסיון</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;