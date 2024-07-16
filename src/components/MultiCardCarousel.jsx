import React from 'react';

const MultiCardCarousel= () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 1',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 2',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 3',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 4',
      description: 'Info which directs to the other page.',
    },
    {
      image: 'https://source.unsplash.com/random',
      title: 'Card 5',
      description: 'Info which directs to the other page.',
    },
  ];

  const totalCards = cards.length;
  const visibleCards = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  const currentCards = [
    ...cards.slice(currentIndex, currentIndex + visibleCards),
    ...cards.slice(0, Math.max(0, visibleCards - (totalCards - currentIndex))),
  ];

  return (
    <div className="mt-2">
      <div className="w-11/12 mx-auto overflow-hidden">
        <div className="relative">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100 / visibleCards}%)` }}
          >
            {currentCards.map((card, index) => (
              <div className="flex-none w-full sm:w-1/2 md:w-1/3 p-4 bg-white rounded-lg shadow-md" key={index}>
                <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.image} alt="Card" />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 absolute top-1/2 w-full transform -translate-y-1/2">
            <button className="w-8 h-8 rounded-full bg-gray-300 text-center" onClick={handlePrev}>&lt;</button>
            <button className="w-8 h-8 rounded-full bg-gray-300 text-center" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
