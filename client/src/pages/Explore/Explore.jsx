// import React from 'react'
// import './Explore.css'

// function Explore() {
//     return (
//         <div className='explore'>
//             <div className="expo-name">
//                 <h2>Explore our Range</h2>
//             </div>
//             <img src="https://cdnasd.countrydelight.in/cdproductimg/new-website/FOOTER-big.webp_1721122880476.webp" alt="" />
//             <button>View All Products</button>
//         </div>

//     )

// }

// export default Explore


import React from 'react';

function Explore() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 ">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">Explore our Range</h2>
      </div>
      <img
        src="https://cdnasd.countrydelight.in/cdproductimg/new-website/FOOTER-big.webp_1721122880476.webp"
        alt="Explore Range"
        className="w-full max-w-4xl h-auto"
      />
      <button className="bg-green-700 text-white mt-8 py-2 px-6 rounded-lg hover:bg-green-800 transition duration-300">
        View All Products
      </button>
    </div>
  );
}

export default Explore;
