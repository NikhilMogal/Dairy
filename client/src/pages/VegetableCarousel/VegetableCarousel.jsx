import React, { useState } from 'react';


const vegetables = [
  { name: 'Bottle Gourd (Lauki)', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicIUqOgr71-HTIe761WCnKZxdhaRB03Es7A&s', description: 'Order Premium Quality Fresh Bottle Gourd (Lauki) Online - 450 to 500 gms' },
  { name: 'Tomato', image: 'https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg', description: 'Fresh, ripe tomatoes sourced from local farms' },
  { name: 'Carrot', image: 'https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671', description: 'Crunchy and sweet carrots, perfect for salads and cooking' },
  { name: 'Spinach', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTyf4emh6jyJ5-jQsCfW6_2laNvZ0w56iRQ&s', description: 'Nutrient-rich spinach leaves, freshly picked for you' },
];

const VegetableCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentVegetable = vegetables[currentIndex];

  return (
    <div className="max-w-4xl mx-auto px-4 py-5">
      <h2 className="text-2xl font-bold mb-6">Fresh Fruits and Vegetables</h2>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0 ">
            <img src={currentVegetable.image} alt={currentVegetable.name} className="w-64 h-auto rounded-lg ml-8" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-3xl font-bold mb-4">{currentVegetable.name}</h3>
            <div className="mb-6">
             
              <p className="text-gray-600">{currentVegetable.description}</p>
              <p className="mt-4 text-gray-600">
                Country Delight vegetables are handpicked and sourced from experienced farmers
                across the country. Light and hydrating, and yet nutrient-rich, they are an ideal
                addition to your diet especially in summer. At Country Delight, we check every vegetable
                across multiple parameters like shape, size, freshness, etc., to ensure you only
                receive the freshest and crunchiest ones. Our team ensures the freshness of vegetables
                from farm to your doorstep.
              </p>
            </div>
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300">
              Download App Now
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {vegetables.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default VegetableCarousel;