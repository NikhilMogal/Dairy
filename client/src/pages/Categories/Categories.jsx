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

function Categories() {
  const categories = [
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
