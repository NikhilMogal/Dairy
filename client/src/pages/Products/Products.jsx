import React from 'react';

const vegetables = [
//   { name: 'Milk And Cocount Water', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/MILK%26COCONUTWATER.png_1722842816905.png', description: 'Order Premium Quality Fresh Bottle Gourd (Lauki) Online - 450 to 500 gms' },
//   { name: 'Bread', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/BREAD.png_1722842960673.png', description: 'Fresh, ripe tomatoes sourced from local farms' },
//   { name: 'Milk Products', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/MILKPRODUCT.png_1722842949438.png', description: 'Crunchy and sweet carrots, perfect for salads and cooking' },
//   { name: 'Fresh Vegetables', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTyf4emh6jyJ5-jQsCfW6_2laNvZ0w56iRQ&s', description: 'Nutrient-rich spinach leaves, freshly picked for you' },
// ];

{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/BREAD.png_1722842960673.png",
  name: "Breads"
},
{
  image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
  name: "Ghee & Oils"
},
{
  image: "https://cdnappcc.countrydelight.in/promotions/atta_1704099152394.png",
  name: "Atta"
},
{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/DRYFRUITS%26SEEDS.png_1722842929886.png",
  name: "Dry Fruits"
},
{
  image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/DAL%26PULSES.png_1722842916152.png",
  name: "Pulses"
},
{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/FRESHVEGETABLE.png_1722842894492.png",
  name: "Fresh Vegetables"
},

{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/EGGS.png_1722842846103.png",
  name: "Eggs"
},
{
  image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/ADDSON.png_1722842834303.png",
  name: "Add-On"
},
{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/MILKPRODUCT.png_1722842949438.png",
  name: "Milk Products"
},
{
  image: "	https://cdnasd.countrydelight.in/cdproductimg/new-website/COUNTRYSPECIAL.png_1722842881863.png",
  name: "COUNTRY SPECIAL"
},
{
  image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/MILK%26COCONUTWATER.png_1722842816905.png",
  name: "Milk And Cocount Water"
}
];

const VegetableCarousel = () => {
  return (
    <>
    <div>
     
      <h2 className='ml-40 text-sm'>Products</h2>
    </div>
    
    <div className="max-w-6xl mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {vegetables.map((vegetable, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <img src={vegetable.image} alt={vegetable.name} className="w-20 h-20 md:w-36 md:h-36 bg-yellow-200 rounded-full border-2 border-transparent hover:border-green-300 transition-all duration-300" />
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
    </>
  );
};

export default VegetableCarousel;
