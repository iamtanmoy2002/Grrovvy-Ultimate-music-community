import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const blogData = [
  { id: 1, title: 'How to Produce a Hit Song', author: 'Producer 1', excerpt: 'Learn the secrets behind producing a chart-topping hit.', cover: 'path/to/cover1.jpg' },
  { id: 2, title: 'The Evolution of Electronic Music', author: 'Producer 2', excerpt: 'A deep dive into the history and future of electronic music.', cover: 'path/to/cover2.jpg' },
  { id: 3, title: 'Collaborating with Artists', author: 'Producer 3', excerpt: 'Tips and tricks for successful collaborations with other artists.', cover: 'path/to/cover3.jpg' },
  // Add more blog posts here
];

function Blogs() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center font-bold mb-10">Blogs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <div key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={blog.cover} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl text-white font-semibold">{blog.title}</h2>
                  <p className="text-lg text-gray-400">by {blog.author}</p>
                  <p className="text-md text-gray-300 mt-2">{blog.excerpt}</p>
                  <button className="mt-4 w-full bg-[#F2613F] hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Read More</button>
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

export default Blogs;
