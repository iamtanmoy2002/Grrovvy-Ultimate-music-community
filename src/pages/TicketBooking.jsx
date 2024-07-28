import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const eventData = [
  { id: 1, title: 'Live Concert with Kygo', date: 'July 30, 2024', location: 'New York, NY', price: '$120', cover: 'path/to/cover1.jpg' },
  { id: 2, title: 'Marshmello Live in Concert', date: 'August 15, 2024', location: 'Los Angeles, CA', price: '$150', cover: 'path/to/cover2.jpg' },
  { id: 3, title: 'Travis Scott Astroworld Tour', date: 'September 10, 2024', location: 'Houston, TX', price: '$200', cover: 'path/to/cover3.jpg' },
  // Add more events here
];

function TicketBooking() {
  return (
    <div>
      <Header />
      <main className="w-full bg-black min-h-screen">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl text-white text-center font-bold mb-10">Ticket Booking</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventData.map((event) => (
              <div key={event.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src={event.cover} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-2xl text-white font-semibold">{event.title}</h2>
                  <p className="text-lg text-gray-400">{event.date}</p>
                  <p className="text-lg text-gray-400">{event.location}</p>
                  <p className="text-lg text-white font-bold">{event.price}</p>
                  <button className="mt-4 w-full bg-[#F2613F] hover:bg-orange-600 text-white font-semibold py-2 rounded-md">Book Now</button>
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

export default TicketBooking;
