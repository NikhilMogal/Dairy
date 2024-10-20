import React from 'react';

function Categories() {
  const categories = [
    {
      image: "<",
      name: "Ghee & Oils"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Dairy Products"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Snacks"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Beverages"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Ghee & Oils"
    },
    {
      image: "/assetes/img/FRESHVEGETABLE.png_1722842894492.png",
      name: "Dairy Products"
    },
    {
      image: "/assetes/img/COUNTRYSPECIAL.png_1722842881863.png",
      name: "Snacks"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Beverages"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Ghee & Oils"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Dairy Products"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Snacks"
    },
    {
      image: "https://cdnasd.countrydelight.in/cdproductimg/new-website/GHEE%26OILS.png_1722842939224.png",
      name: "Beverages"
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
              className="w-20 h-20 md:w-36 md:h-36 bg-white rounded-full border-2 border-transparent hover:border-green-300 transition-all duration-300"
            />
            <p className="mt-2 text-sm md:text-sm font-semibold text-gray-800">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
