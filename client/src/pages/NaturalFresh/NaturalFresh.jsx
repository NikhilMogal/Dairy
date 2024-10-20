import React from 'react';

// SVG Icon component
const Img = ({ src }) => (
  <img src={src} alt="Feature Icon" className="w-20 h-20 mb-2" />
);

// Feature Card component
const FeatureCard = ({ img, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <Img src={img} />
    <h3 className="font-semibold mb-1">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

// Main component for natural and fresh grocery features
const NaturalFreshGrocery = () => {
  const features = [
    {
      img: "https://cdnasd.countrydelight.in/cdproductimg/new-website/Group%2058840%403x_1675854398971.webp",
      title: "Milking Twice a Day",
      description: "We source milk from farmers on the outskirts of your city for complete freshness and purity"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVEnj2QepfoYB3e08X6M9uttsJYhrrYoksQ&s",
      title: "100+ Tests Everyday",
      description: "We quality test all milk for adulteration every single day"
    },
    {
      img: "https://w7.pngwing.com/pngs/858/755/png-transparent-degree-symbol-celsius-temperature-thermometer-symbol-miscellaneous-text-measurement-thumbnail.png",
      title: "Pasteurization & Packing at 4°C",
      description: "Maintaining milk at 4°C improves its shelf life and prevents harmful bacteria growth"
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1650/1650267.png",
      title: "Assured 7 AM Doorstep Milk & Grocery Delivery",
      description: "Fresh Milk & Best quality Groceries reach your doorstep daily morning."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Heading Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">We are bringing Natural & Fresh back</h1>
        <p className="text-center text-gray-600 mb-8">
          Better everyday health begins with the basics. We ensure everything in your kitchen has been thoroughly tested for purity and freshness.
        </p>

        {/* Dynamic Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">One of the Best Online Grocery Shopping in India with Instant & Early Morning Delivery Options</h2>
        
        <p className="mb-4">
          Looking for a convenient way to buy groceries online? Look no further! Our online grocery store offers instant delivery and early morning delivery options to ensure you get your essentials when you need them.
        </p>
        <p className="mb-4">
          With just a few clicks, you can order your groceries online and have them delivered straight to your doorstep. No more waiting in long lines at the store or lugging heavy bags home - we've got you covered.
        </p>
        <p className="mb-4">
          Whether you need fresh produce, vegetables, fruits, flowers, milk, milk products, staples, or anything in between, our wide selection of high-quality products has everything you need. Say goodbye to the hassle of traditional grocery shopping and hello to the ease and convenience of ordering groceries online.
        </p>
        <p className="mb-4">
          Don't wait any longer - experience the ease of online grocery shopping with our instant delivery and early morning delivery options. Order your groceries online today!
        </p>
      </div>
    </div>
  );
};

export default NaturalFreshGrocery;
