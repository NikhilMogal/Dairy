import React from 'react';

const vegetables = [
  { name: 'Milk And Cocount Water', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicIUqOgr71-HTIe761WCnKZxdhaRB03Es7A&s', description: 'Order Premium Quality Fresh Bottle Gourd (Lauki) Online - 450 to 500 gms' },
  { name: 'Tomato', image: 'https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg', description: 'Fresh, ripe tomatoes sourced from local farms' },
  { name: 'Carrot', image: 'https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671', description: 'Crunchy and sweet carrots, perfect for salads and cooking' },
  { name: 'Spinach', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTyf4emh6jyJ5-jQsCfW6_2laNvZ0w56iRQ&s', description: 'Nutrient-rich spinach leaves, freshly picked for you' },
];

const VegetableCarousel = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-5">

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vegetables.map((vegetable, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={vegetable.image} alt={vegetable.name} className="w-20 h-20 md:w-36 md:h-36 bg-white rounded-full border-2 border-transparent hover:border-green-300 transition-all duration-300" />
            </div>
            <div className="md:w-1/2 md:pl-8 text-center md:text-left">
              <h3 className="text-1/2  mb-1">{vegetable.name}</h3>
              <p className="text-sm text-gray-600">{vegetable.description}</p>
              <p className="mt-4 text-sm  text-gray-600">
                Country Delight vegetables are handpicked and sourced from experienced farmers
             
              </p>
              <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full mt-4 hover:bg-green-600 transition duration-300">
                View Products
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetableCarousel;
