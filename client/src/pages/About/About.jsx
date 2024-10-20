import React from 'react';
import CAREER from "../../assets/category/career.jpeg"

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50">
      <section className="mb-12 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
        <p className="text-gray-600 mb-4 ">
          50 years back, life was very simple. We used to have a cow in our backyard that gave us natural and fresh milk everyday. There was never a need to worry about adulteration since we owned the animal. Today, the milk we consume is either reconstituted/recombined with milk powder or takes days to reach our home post milking which is prone to adulteration.
        </p>
        <p className="text-gray-600">
          Started in 2015, Country Delight is a bunch of Engineers and IIM Graduates who aim to bring back the basics of Milk. Country Delight promises natural, fresh and unadulterated milk directly to the doorstep of the consumer. Consumer ordering and servicing happens through a first-of-its-kind mobile application that completely takes away the hassle of managing ones milk requirements.
        </p>
      </section>

      <div className="flex flex-col md:flex-row gap-8">
        <section className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Career</h2>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <img src={CAREER} alt="Career illustration" className="w-full h-64 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Become a <span className="text-gray-500">CountryDelight</span> superhero</h3>
            <p className="text-gray-600 mb-4">We are hiring all across disciplines.</p>
            <p className="text-gray-600">Contact us at: info@countrydelight.in</p>
          </div>
        </section>

        <section className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Founders</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 flex">
              <img src="/api/placeholder/80/80" alt="Chakradhar Gade" className="w-20 h-20 rounded-full mr-4" />
              <div>
                
                <p className="text-gray-600 mb-2">We saw a clear problem to solve, a huge industry to tap into and a sustainable business model that we could scale using technology. A nice initiative</p>
                <p className="font-bold">Chakradhar Gade</p>
                <p className="text-sm text-gray-500">Co-founder, Country Delight</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 flex">
              <img src="/api/placeholder/80/80" alt="Nitin Kaushal" className="w-20 h-20 rounded-full mr-4" />
              <div>
               
                <p className="text-gray-600 mb-2">We realized that the Indian liquid milk market, despite being such a large and old industry, is devoid of any innovation and follows very unscientific practices. For example, at the initial levels of aggregation, most of the milk testing is still done by...</p>
                <p className="font-bold">Nitin Kaushal</p>
                <p className="text-sm text-gray-500">Co-founder, Country Delight</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;