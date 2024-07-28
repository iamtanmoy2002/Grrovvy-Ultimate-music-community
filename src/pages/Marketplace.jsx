import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const marketData = [
  { id: 1, title: 'Beat 1', artist: 'Artist 1', price: '$50', cover: 'path/to/cover1.jpg' },
  { id: 2, title: 'Beat 2', artist: 'Artist 2', price: '$70', cover: 'path/to/cover2.jpg' },
  { id: 3, title: 'Beat 3', artist: 'Artist 3', price: '$100', cover: 'path/to/cover3.jpg' },
  // Add more market items here
];

function Marketplace() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center font-bold mb-10">Marketplace</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketData.map((item) => (
              <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={item.cover} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl text-white font-semibold">{item.title}</h2>
                  <p className="text-lg text-gray-400">{item.artist}</p>
                  <p className="text-lg text-white font-bold">{item.price}</p>
                  <button className="mt-4 w-full bg-[#F2613F] hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Buy Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Marketplace;
