import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const musicData = [
  { id: 1, title: 'Song Title 1', artist: 'Artist 1', cover: 'path/to/cover1.jpg' },
  { id: 2, title: 'Song Title 2', artist: 'Artist 2', cover: 'path/to/cover2.jpg' },
  { id: 3, title: 'Song Title 3', artist: 'Artist 3', cover: 'path/to/cover3.jpg' },
  // Add more songs here
];

function MusicLibrary() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center font-bold mb-10">Music Library</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {musicData.map((song) => (
              <div key={song.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={song.cover} alt={song.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl text-white font-semibold">{song.title}</h2>
                  <p className="text-lg text-gray-400">{song.artist}</p>
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

export default MusicLibrary;
