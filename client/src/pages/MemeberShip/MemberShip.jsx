// import React, { useState } from 'react';
// import { QrCode, Send } from 'lucide-react';
// import { FaApple, FaGooglePlay } from 'react-icons/fa';

// const Membership = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Submitted phone number:', phoneNumber);
//   };

//   return (
//     <div className="bg-white p-9 rounded-lg shadow-md max-w-6xl mx-auto">
//       <div className="flex items-center justify-between flex-wrap gap-4">
//         <div className="flex-grow">
//           <h2 className="text-2xl font-bold text-gray-800">Free Membership</h2>
//           <p className="text-gray-600">On your signup</p>
//         </div>
        
//         <div className="flex items-center space-x-14">
//           <div className="border-2 border-gray-300 p-2 rounded-lg">
//             <QrCode size={64} />
//             <p className="text-xs text-gray-500 mt-1 text-center ">SCAN TO DOWNLOAD</p>
//           </div>
          
//           <span className="text-gray-400">or</span>
          
//           <form onSubmit={handleSubmit} className="flex">
//             <input
//               type="tel"
//               placeholder="Enter Your Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//               className="border border-gray-300 rounded-l-md  py-2 focus:outline-none focus:ring-2"
//             />
//             <button
//               type="submit"
//               className="bg-green-500 text-white py-2 rounded-r-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
//             >
//               <span >Send Link</span>
//               <Send size={16} className="" />
//             </button>
//           </form>
          
//           <span className="text-gray-400">or</span>
          
          
//           <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-8">
//       {/* App Store Button */}
//       <a
//         href="https://www.apple.com/app-store/"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center bg-black text-white px-4 py-3 rounded-lg transition-transform transform hover:scale-105"
//       >
//         <FaApple className="text-3xl mr-3" />
//         <div>
//           <p className="text-xs">Download on the</p>
//           <p className="text-lg font-bold">App Store</p>
//         </div>
//       </a>
            
//       {/* Google Play Button */}
//       <a
//         href="https://play.google.com/store"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="flex items-center bg-black text-white px-4 py-3 rounded-lg transition-transform transform hover:scale-105"
//       >
//         <FaGooglePlay className="text-3xl mr-3" />
//         <div>
//           <p className="text-xs">Get it on</p>
//           <p className="text-lg font-bold">Google Play</p>
//         </div>
//       </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Membership;



import React, { useState } from 'react';
import { QrCode, Send } from 'lucide-react';
import { FaApple, FaGooglePlay } from 'react-icons/fa';

const Membership = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted phone number:', phoneNumber);
  };

  return (
    <div className="bg-white p-6 sm:p-9 rounded-lg shadow-md max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Title Section */}
        <div className="flex-grow text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">Free Membership</h2>
          <p className="text-gray-600">On your signup</p>
        </div>
        
        {/* QR Code, Form, and Buttons Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
          
          {/* QR Code Section */}
          <div className="flex flex-col items-center border-2 border-gray-300 p-3 rounded-lg">
            <QrCode size={64} />
            <p className="text-xs text-gray-500 mt-1 text-center">SCAN TO DOWNLOAD</p>
          </div>
          
          {/* "or" text */}
          <span className="hidden sm:block text-gray-400">or</span>

          {/* Phone Number Form */}
          <form onSubmit={handleSubmit} className="flex w-full sm:w-auto">
            <input
              type="tel"
              placeholder="Enter Your Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full sm:w-auto border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center"
            >
              <span>Send Link</span>
              <Send size={16} className="ml-2" />
            </button>
          </form>

          {/* "or" text */}
          <span className="hidden sm:block text-gray-400">or</span>
          
          {/* App Store and Google Play Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            
            {/* App Store Button */}
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-4 py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              <FaApple className="text-3xl mr-3" />
              <div>
                <p className="text-xs">Download on the</p>
                <p className="text-lg font-bold">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-black text-white px-4 py-3 rounded-lg transition-transform transform hover:scale-105"
            >
              <FaGooglePlay className="text-3xl mr-3" />
              <div>
                <p className="text-xs">Get it on</p>
                <p className="text-lg font-bold">Google Play</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
