import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KygoImg from '../assets/Kygo.jpg';
import MarshImg from '../assets/Marshmello.jpg'
import TravisImg from '../assets/Travis.jpg'
import WeekendImg from '../assets/Weekend.jpg'

function Home() {
  return (
    <div>
      <Header />
      <main className='w-full bg-black'>
        <div className='firstPart relative w-full sm:h-[850px] h-[800px]'>
          <img className='w-full h-full object-cover' src={KygoImg} alt="" />
          <h1 className=' absolute left-10 top-[350px] text-8xl text-white font-bold'>Join <br />The Ultimate <br />Music Community</h1>
          <div className='text-center'>
            <Link to="/signup" className="absolute left-10 lg:top-[650px] sm:top-[750px] hover:bg-orange-600 px-4 py-2 rounded-lg bg-[#F2613F] my-4 mr-2 text-white font-semibold text-lg">Sign Up</Link>
          </div>
        </div>
        <div className='secondPart lg:flex bg-black w-full'>
         <img className='lg:w-1/2 object-cover ' src={MarshImg} alt="marshmelloimg" />
         <div className='lg:w-1/2'>
          <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>Wide range of <br /> Music Library</h1><br />
          <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Extensive collection of songs across genres and languages.<br /><br />
          Personalized playlists and recommendations based on listening patterns.</p>
         </div>
        </div>
        <div className='thirdpart md:hidden sm:hidden thirdPart lg:flex bg-black w-full'>
          <div className='lg:w-1/2'>
            <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>DM your <br />favourite Artist</h1><br />
            <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Fans can directly message their favorite artists. <br /> <br />
            Artists can manage their inbox and interact with fans.</p>
          </div>
          <img className='lg:w-1/2 object-cover ' src={TravisImg} alt="marshmelloimg" />
        </div>
        <div className='thirdPart lg:flex bg-black w-full'>
          <div className='lg:hidden'>
            <img className='lg:w-1/2 object-cover ' src={TravisImg} alt="marshmelloimg" />
            <div className='lg:w-1/2'>
              <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>DM your <br />favourite Artist</h1><br />
              <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Fans can directly message their favorite artists. <br /> <br />
              Artists can manage their inbox and interact with fans.</p>
            </div>
          </div>
         
          
        </div>
        <div className='forthPart lg:flex bg-black w-full'>
         <img className='lg:w-1/2 object-cover ' src={WeekendImg} alt="marshmelloimg" />
         <div className='lg:w-1/2'>
          <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>Wide range of <br /> Music Library</h1><br />
          <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Extensive collection of songs across genres and languages.<br /><br />
          Personalized playlists and recommendations based on listening patterns.</p>
         </div>
        </div>
        
        <div className='fifthPart bg-black p-3 text-center'>
          <h1 className='w-full border border-white'></h1>
          <h1 className='text-white font-thin text-8xl mb-10'>Other Key Features</h1>
          <div>
            <h1 className='text-white font-semibold text-5xl mb-5'>
              Monthly Subscription Plans
            </h1>
            <p className='text-white font-thin text-3xl mb-10'>
              Subscribe to your favourite artist for early access to albums, enjoy unreleased tracks etc.
            </p>
          </div>
          <div>
            <h1 className='text-white font-semibold text-5xl mb-5'>
              Live Streaming
            </h1>
            <p className='text-white font-thin text-3xl mb-10'>
              Enjoy Live performace from your favourite artists. Artists Can Go live for all the fans or subsciber only sessions.
            </p>
          </div>
          <div>
            <h1 className='text-white font-semibold text-5xl mb-5'>
              Gifting System
            </h1>
            <p className='text-white font-thin text-3xl mb-10'>
              Contribute to your artist's wish-list so that they can produce more efficiently. <br />You can also buy them a coffee to show your support by the small contributuion. Lets Grow together.
            </p>
          </div>
          <div>
            <h1 className='text-white font-semibold text-5xl mb-5'>
              Ticket Booking
            </h1>
            <p className='text-white font-thin text-3xl mb-10'>
             Now book tickets of your favourite artist's live shows from their profile itself and keep track of there future events. All at One place.
            </p>
          </div>
        </div>

        <div className='text-center'>
          <Link to="/signup" className="hover:bg-orange-600 px-6 py-3 rounded-lg bg-[#F2613F] my-4 mr-2 text-white text-lg font-semibold text-center">Sign Up</Link>
        </div>
       
      </main>
      <Footer />
    </div>
  );
}

export default Home;
