import React, { useEffect, useState } from 'react';

const CardComponent = () => {
  const cardsData = [
    {
      title: 'Happy Customers',
      count: 122,
      image: 'https://img.icons8.com/color/96/000000/happy--v1.png',
    },
    {
      title: 'Farmer Support',
      count: 123,
      image: 'https://img.icons8.com/color/96/000000/farmer.png',
    },
    {
      title: 'Orders Delivered',
      count: 15,
      image: 'https://img.icons8.com/color/96/000000/package.png',
    },
    {
      title: 'Cities Delivered',
      count: 15,
      image: 'https://img.icons8.com/color/96/000000/marker.png',
    },
  ];

  const [cards, setCards] = useState([]);

  // Function to animate the counter
  const animateCounter = (targetCount, index) => {
    let count = 0;
    const increment = Math.ceil(targetCount / 100); // Increment value

    const interval = setInterval(() => {
      count += increment;
      if (count >= targetCount) {
        count = targetCount;
        clearInterval(interval); // Stop when we reach the target
      }
      setCards((prev) =>
        prev.map((card, idx) => (idx === index ? { ...card, displayedCount: count } : card))
      );
    }, 30); // Update every 30ms
  };

  useEffect(() => {
    const updatedCards = cardsData.map((card) => ({
      ...card,
      displayedCount: 0, // Start from 0 for animation
    }));

    setCards(updatedCards);

    updatedCards.forEach((card, index) => animateCounter(card.count, index));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl  font-medium  mb-6">Our Success Stories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
          >
            <img src={card.image} alt={card.title} className="w-16 h-16 mb-4" />
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <p className="text-2xl font-bold text-green-500">{card.displayedCount}K+</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
