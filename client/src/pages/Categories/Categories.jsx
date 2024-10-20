import React from 'react';

function Categories() {
  const categories = [
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

  return (
    <div className="bg-amber-50 px-6 md:px-10 py-8">
      <p className="text-xl font-semibold mb-4 text-center">Explore Categories</p>
      <div className="flex flex-wrap  sm:flex-cols-2  justify-center gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={category.image}
              alt={category.name}
              className="w-20 h-20 md:w-36 md:h-36 bg-white rounded-full border-2 border-transparent hover:border-green-300 transition-all duration-300 "
            />
            <p className="mt-2 text-sm md:text-sm font-semibold text-gray-800">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
