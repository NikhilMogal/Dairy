import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-1xl mb-4">Milk and Coconut water</h3>
            <ul className="space-y-2 text-sm">
              <li>Cow Milk</li>
              <li>Buffalo Milk</li>
              <li>Low Fat Cow Milk</li>
              <li>Coconut Water</li>
              <li>A2 Cow Milk</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-1xl mb-4">Country Specials</h3>
            <ul className="space-y-2 text-sm">
              <li>Idli Dosa Batter</li>
              <li>Mango Lassi</li>
              <li>Taaza Jeera Chaach</li>
              <li>Taaza Pudina Masala Chaach</li>
              <li>Blueberry Yodurt</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-1xl mb-4">Other Essentials</h3>
            <ul className="space-y-2 text-sm">
              <li>Taaza Paneer</li>
              <li>Low Fat Dahi/Curd</li>
              <li>Ghar Jaise Dahi/Curd</li>
              <li>Chana Dal</li>
              <li>Urad Dal</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Download App</h3>
            <div className="space-y-2">
              <img src="/api/placeholder/160/48" alt="Get it on Google Play" className="h-12" />
              <img src="/api/placeholder/160/48" alt="Available on the App Store" className="h-12" />
            </div>
          </div>
        </div>
        <hr className='border border-gray-300 mt-7'/>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2 text-sm">
            <p>About Us</p>
            <p>How Can We Help</p>
            <p>Connect With Us</p>
            <div className="flex space-x-4 pt-6">
              <Facebook size={24} />
              <Instagram size={24} />
              <Linkedin size={24} />
              <Youtube size={24} />
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p>Privacy</p>
            <p>FAQs</p>
          </div>
          <div className="space-y-2 text-sm">
            <p>Terms & Conditions</p>
            <p>Country Delight Reviews</p>
          </div>
        </div>

        <hr className='border border-gray-300 mt-7'/>
        
        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-4">Delivery Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className='text-sm'>
              <p>Delhi NCR</p>
              <p>Hyderabad</p>
              <p>Coimbatore</p>
              <p>Mysore</p>
            </div>
            <div className='text-sm'>
              <p>Bangalore</p>
              <p>Jaipur</p>
              <p>Guntur</p>
              <p>Nashik</p>
            </div>
            <div className='text-sm'>
              <p>Chandigarh</p>
              <p>Mumbai</p>
              <p>Kolkata</p>
              <p>Surat</p>
            </div >
            <div lassName="text-sm">
              <p>Chennai</p>
              <p>Pune</p>
              <p>Lucknow</p>
              <p>Vijayawada</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;