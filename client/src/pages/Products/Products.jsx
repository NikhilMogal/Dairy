import React from 'react';
import ATTA from "../../assets/category/atta.png"
import BREAD from "../../assets/category/BREAD.png"
import ADDSON from "../../assets/category/ADDSON.png"
import COUNTRYSPECIAL from "../../assets/category/COUNTRYSPECIAL.png"
import DAL from "../../assets/category/DAL&PULSES.png"
import EGGS from "../../assets/category/EGGS.png"
import MILKCOCO from "../../assets/category/MILK&COCONUTWATER.png"
import MILKPRODUCT from "../../assets/category/MILKPRODUCT.png"
import DRYFRUITS from "../../assets/category/DRYFRUITS&SEEDS.png"
import FRESHVEG from "../../assets/category/FRESHVEGETABLE.png"
import FRESHFRUIT from "../../assets/category/FRESHFRUITS.png"
const vegetables = [
//   { name: 'Milk And Cocount Water', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/MILK%26COCONUTWATER.png_1722842816905.png', description: 'Order Premium Quality Fresh Bottle Gourd (Lauki) Online - 450 to 500 gms' },
//   { name: 'Bread', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/BREAD.png_1722842960673.png', description: 'Fresh, ripe tomatoes sourced from local farms' },
//   { name: 'Milk Products', image: 'https://cdnasd.countrydelight.in/cdproductimg/new-website/MILKPRODUCT.png_1722842949438.png', description: 'Crunchy and sweet carrots, perfect for salads and cooking' },
//   { name: 'Fresh Vegetables', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHTyf4emh6jyJ5-jQsCfW6_2laNvZ0w56iRQ&s', description: 'Nutrient-rich spinach leaves, freshly picked for you' },
// ];

{
  image: BREAD,
  name: "Breads"
},
{
  image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
  name: "Ghee & Oils"
},
{
  image: ATTA,
  name: "Atta"
},
{
  image: DRYFRUITS,
  name: "Dry Fruits"
},
{
  image: DAL ,
  name: "Pulses"
},
{
  image: FRESHVEG,
  name: "Fresh Vegetables"
},

{
  image: EGGS,
  name: "Eggs"
},
{
  image: ADDSON,
  name: "Add-On"
},
{
  image: MILKPRODUCT,
  name: "Milk Products"
},
{
  image: COUNTRYSPECIAL,
  name: "COUNTRY SPECIAL"
},
{
  image: MILKCOCO,
  name: "Milk And Cocount Water"
},
{
  image: FRESHFRUIT,
  name: "Fresh Fruits"
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
