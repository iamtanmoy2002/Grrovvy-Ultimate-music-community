import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const podcastData = [
  { id: 1, title: 'The Future of Music', host: 'Host 1', description: 'Exploring the latest trends and technologies in the music industry.', cover: 'path/to/cover1.jpg' },
  { id: 2, title: 'Behind the Lyrics', host: 'Host 2', description: 'An in-depth analysis of the lyrics of popular songs.', cover: 'path/to/cover2.jpg' },
  { id: 3, title: 'Music Production Tips', host: 'Host 3', description: 'Tips and tricks from top producers in the industry.', cover: 'path/to/cover3.jpg' },
  // Add more podcast episodes here
];

function Podcasts() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center font-bold mb-10">Podcasts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcastData.map((podcast) => (
              <div key={podcast.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={podcast.cover} alt={podcast.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl text-white font-semibold">{podcast.title}</h2>
                  <p className="text-lg text-gray-400">Hosted by {podcast.host}</p>
                  <p className="text-md text-gray-300 mt-2">{podcast.description}</p>
                  <button className="mt-4 w-full bg-[#F2613F] hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Listen Now</button>
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

export default Podcasts;
