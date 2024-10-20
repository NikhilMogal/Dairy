import React from 'react';
import BikeImage from '../../assets/img/Bike.webp';
import HomeImage from '../../assets/img/Home.webp';
import AddImage from '../../assets/img/AddHome.webp';


const DeliveryProcess = () => {
  const deliverySteps = [
    { title: 'Milk collection from healthy cattle', image: BikeImage },
    { title: 'Quality tested for 100+ common adulterants', image: HomeImage },
    { title: 'Home delivery by 7 am', image: AddImage },
  ];

  const deliveryLocations = [
    { name: 'Mumbai', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
    { name: 'Mysore', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
    { name: 'Nashik', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
    { name: 'Pune', icon: '	https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
    { name: 'Surat', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Vijayawada', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Warangal', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Bangalore', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Chandigarh', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Chennai', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fchennai_1660921327710.png' },
    { name: 'Coimbatore', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
    { name: 'Guntur', icon: 'https://cdnasd.countrydelight.in/Regions/%2Fhyderabad_1660921339220.png' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8 text-center">
        Farm to Home, Every Day Online Milk & Groceries Delivery
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        {deliverySteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-48 h-48 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <img src={step.image} alt={step.title} className="w-70 h-80 object-contain" />
            </div>
            <p className="text-center text-sm">{step.title}</p>
            {index < deliverySteps.length - 1 && (
              <div className="hidden md:block absolute top-24 left-1/2 w-1/3 border-t-2 border-dashed border-green-500"></div>
            )}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-6">We Deliver In</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {deliveryLocations.map((location, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={location.icon} alt={location.name} className="w-12 h-12 object-contain mb-2" />
            <p className="text-center text-sm">{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryProcess;