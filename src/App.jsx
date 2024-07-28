import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MusicLibrary from './pages/MusicLibrary';
import ArtistProfile from './pages/ArtistProfile';
import LiveStreaming from './pages/LiveStreaming';
import DirectMessaging from './pages/DirectMessaging';
import Subscription from './pages/Subscription';
import Podcasts from './pages/Podcasts';
import Blog from './pages/Blog';
import Marketplace from './pages/Marketplace';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import TicketBooking from './pages/TicketBooking';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/music-library" element={<MusicLibrary />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route path="/live-streaming" element={<LiveStreaming />} />
        <Route path="/messages" element={<DirectMessaging />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/book-tickets" element={<TicketBooking />} />
      </Routes>
    </div>
  );
}

export default App;
