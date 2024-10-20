// import React from 'react';
// import './NewLaunch.css'; 

// function NewLaunches() {
//   const products = [
//     {
//       id: 1,
//       name: "Carrot",
//       image: "https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671", 
//       price: "50",
//       gm: "500g"
//     },
//     {
//       id: 2,
//       name: "Potato",
//       image: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg", 
//       price: "30",
//       gm: "1kg"
//     },
//     {
//       id: 3,
//       name: "Tomato",
//       image: "https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg", 
//       price: "40",
//       gm: "500g"
//     },
//     {
//       id: 4,
//       name: "Onion",
//       image: "https://m.media-amazon.com/images/I/51DJ-9xkuQL._AC_UF1000,1000_QL80_.jpg", 
//       price: "25",
//       gm: "1kg"
//     },
//     {
//       id: 5,
//       name: "Cucumber",
//       image: "https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556&width=1500", 
//       price: "15",
//       gm: "500g"
//     },
//     {
//       id: 6,
//       name: "Bell Pepper",
//       image: "https://fruitboxco.com/cdn/shop/products/VG-CL-20_800x.jpg?v=1588920882", 
//       price: "20",
//       gm: "500g"
//     }
//   ];

//   return (
//     <div className="new-launches">
//       <p>New Launches</p>
//       <div className="product-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-image" />
//             <h3>{product.name}</h3>
//             <p>Price: ₹{product.price}</p>
//             <p>Weight: {product.gm}</p>
           
//           </div>
          
//         ))}
//        <button>Available On App</button>
//       </div>
      
//     </div>
//   );
// }

// export default NewLaunches;



import React from 'react';

function NewLaunches() {
  const products = [
    {
      id: 1,
      name: "Carrot",
      image: "https://www.allthatgrows.in/cdn/shop/products/Carrot-Orange.jpg?v=1598079671",
      price: "50",
      gm: "500g"
    },
    {
      id: 2,
      name: "Potato",
      image: "https://m.media-amazon.com/images/I/313dtY-LOEL.jpg",
      price: "30",
      gm: "1kg"
    },
    {
      id: 3,
      name: "Tomato",
      image: "https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg",
      price: "40",
      gm: "500g"
    },
    {
      id: 4,
      name: "Onion",
      image: "https://m.media-amazon.com/images/I/51DJ-9xkuQL._AC_UF1000,1000_QL80_.jpg",
      price: "25",
      gm: "1kg"
    },
    {
      id: 5,
      name: "Cucumber",
      image: "https://seed2plant.in/cdn/shop/products/saladcucumberseeds.jpg?v=1603435556&width=1500",
      price: "15",
      gm: "500g"
    },
    {
      id: 6,
      name: "Bell Pepper",
      image: "https://fruitboxco.com/cdn/shop/products/VG-CL-20_800x.jpg?v=1588920882",
      price: "20",
      gm: "500g"
    }
  ];

  return (
    <div className="w-full bg-amber-100 p-6 my-4">
      <p className="text-2xl font-bold text-center mb-6">New Launches</p>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg transition-transform transform hover:scale-105 w-full sm:w-[45%] md:w-[50%] lg:w-[15%]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700">Price: ₹{product.price}</p>
            <p className="text-gray-700">Weight: {product.gm}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
      <button className="mt-6 px-6 py-2  bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ">
        Available On App
      </button>
      </div>
    </div>
  );
}

export default NewLaunches;
