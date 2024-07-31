import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import KygoImg from '../assets/Kygo3.png';
import MarshImg from '../assets/Marsh2.png';
import TravisImg from '../assets/Travis2.png';
import WeekendImg from '../assets/weekend2.png';

function Home() {
  return (
    <div>
      <Header />
      <main className='w-full bg-black'>
        {/* First Section */}
        <div className='relative w-full sm:h-[600px] h-[400px]'>
          <img className='w-full h-full object-cover' src={KygoImg} alt="Kygo" />
          <h1 className='absolute left-7 lg:left-14 top-1/2 sm:top-1/3 lg:text-8xl md:text-7xl sm:text-6xl text-3xl text-white font-bold'>
            Join <br />The Ultimate <br />Music Community
          </h1>
          <Link to="/signup" className="absolute left-7 lg:left-14 top-80 sm:top-2/3 md:top-[450px] lg:top-[500px] hover:bg-orange-600 px-4 py-2 rounded-lg bg-[#F2613F] text-white font-semibold text-md">
            Sign Up
          </Link>
        </div>

        {/* Second Section */}
        <div className='lg:flex bg-black w-full'>
          <img className='lg:w-1/2 w-full object-cover' src={MarshImg} alt="Marshmello" />
          <div className='lg:w-1/2 p-4'>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl text-white text-center font-bold mt-10 lg:mt-24'>
              Wide range of <br /> Music Library
            </h1>
            <p className='lg:text-4xl sm:text-3xl text-xl text-white mt-5 lg:mt-10'>
              Extensive collection of songs across genres and languages.
              <br /><br />
              Personalized playlists and recommendations based on listening patterns.
            </p>
          </div>
        </div>

        {/* Third Section */}
        <div className='lg:flex bg-black w-full'>
          <div className='lg:w-1/2 p-4'>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl text-white text-center font-bold mt-10 lg:mt-24'>
              DM your <br />favourite Artist
            </h1>
            <p className='lg:text-4xl sm:text-3xl text-xl text-white mt-5 lg:mt-10'>
              Fans can directly message their favorite artists.
              <br /><br />
              Artists can manage their inbox and interact with fans.
            </p>
          </div>
          <img className='lg:w-1/2 w-full object-cover mt-4 lg:mt-0' src={TravisImg} alt="Travis Scott" />
        </div>

        {/* Fourth Section */}
        <div className='lg:flex bg-black w-full'>
          <img className='lg:w-1/2 w-full object-cover' src={WeekendImg} alt="The Weekend" />
          <div className='lg:w-1/2 p-4'>
            <h1 className='lg:text-7xl sm:text-6xl text-4xl text-white text-center font-bold mt-10 lg:mt-24'>
              Enjoy <br />Exclusive Content
            </h1>
            <p className='lg:text-4xl sm:text-3xl text-xl text-white mt-5 lg:mt-10'>
              Get early access to albums, unreleased tracks, and more with artist subscription plans.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className='bg-black p-4'>
          <h1 className='border-t border-white w-full'></h1>
          <h1 className='text-white font-thin text-4xl sm:text-6xl text-center mb-10 mt-5'>
            Other Key Features
          </h1>
          <div className='space-y-10 lg:text-center'>
            <div>
              <h2 className='text-white font-semibold text-2xl sm:text-4xl mb-2'>
                Monthly Subscription Plans
              </h2>
              <p className='text-white font-thin text-lg sm:text-2xl'>
                Subscribe to your favourite artist for early access to albums, enjoy unreleased tracks, etc.
              </p>
            </div>
            <div>
              <h2 className='text-white font-semibold text-2xl sm:text-4xl mb-2'>
                Live Streaming
              </h2>
              <p className='text-white font-thin text-lg sm:text-2xl'>
                Enjoy live performances from your favourite artists. Artists can go live for all fans or subscriber-only sessions.
              </p>
            </div>
            <div>
              <h2 className='text-white font-semibold text-2xl sm:text-4xl mb-2'>
                Gifting System
              </h2>
              <p className='text-white font-thin text-lg sm:text-2xl'>
                Contribute to your artist's wish-list or buy them a coffee to show your support. Let's grow together.
              </p>
            </div>
            <div>
              <h2 className='text-white font-semibold text-2xl sm:text-4xl mb-2'>
                Ticket Booking
              </h2>
              <p className='text-white font-thin text-lg sm:text-2xl'>
                Book tickets for your favourite artist's live shows and keep track of their future events—all in one place.
              </p>
            </div>
          </div>
        </div>

        <div className='text-center pb-3'>
          <Link to="/signup" className="hover:bg-orange-600 px-6 py-3 rounded-lg bg-[#F2613F] text-white text-lg font-semibold">
            Sign Up
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;



// My code starts here 

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import KygoImg from '../assets/Kygo.jpg';
// import MarshImg from '../assets/Marshmello.jpg'
// import TravisImg from '../assets/Travis.jpg'
// import WeekendImg from '../assets/Weekend.jpg'

// function Home() {
//   return (
//     <div>
//       <Header />
//       <main className='w-full bg-black scroll-behavior: smooth'>
//         <div className='firstPart relative w-full sm:h-[850px] h-[800px]'>
//           <img className='w-full h-full object-cover' src={KygoImg} alt="" />
//           <h1 className=' absolute left-10 top-[300px] lg:text-8xl md:text-7xl sm:text-6xl text-white font-bold'>Join <br />The Ultimate <br />Music Community</h1>
//           <div className='text-center'>
//             <Link to="/signup" className="absolute left-10 lg:top-[600px] sm:top-[700px] hover:bg-orange-600 px-4 py-2 rounded-lg bg-[#F2613F] my-4 mr-2 text-white font-semibold text-lg">Sign Up</Link>
//           </div>
//         </div>
//         <div className='secondPart lg:flex bg-black w-full'>
//          <img className='lg:w-1/2 object-cover ' src={MarshImg} alt="marshmelloimg" />
//          <div className='lg:w-1/2'>
//           <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>Wide range of <br /> Music Library</h1><br />
//           <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Extensive collection of songs across genres and languages.<br /><br />
//           Personalized playlists and recommendations based on listening patterns.</p>
//          </div>
//         </div>
//         <div className='thirdpart md:hidden sm:hidden thirdPart lg:flex bg-black w-full'>
//           <div className='lg:w-1/2'>
//             <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>DM your <br />favourite Artist</h1><br />
//             <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Fans can directly message their favorite artists. <br /> <br />
//             Artists can manage their inbox and interact with fans.</p>
//           </div>
//           <img className='lg:w-1/2 object-cover ' src={TravisImg} alt="marshmelloimg" />
//         </div>
//         <div className='thirdPart lg:flex bg-black w-full'>
//           <div className='lg:hidden'>
//             <img className='lg:w-1/2 object-cover ' src={TravisImg} alt="marshmelloimg" />
//             <div className='lg:w-1/2'>
//               <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>DM your <br />favourite Artist</h1><br />
//               <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Fans can directly message their favorite artists. <br /> <br />
//               Artists can manage their inbox and interact with fans.</p>
//             </div>
//           </div>
         
          
//         </div>
//         <div className='forthPart lg:flex bg-black w-full'>
//          <img className='lg:w-1/2 object-cover ' src={WeekendImg} alt="marshmelloimg" />
//          <div className='lg:w-1/2'>
//           <h1 className='lg:text-8xl sm:text-6xl text-white  text-center font-bold p-2 w-full lg:mt-[150px] mb-5 '>Wide range of <br /> Music Library</h1><br />
//           <p className='lg:text-5xl sm:text-3xl text-white pl-6 pr-2 text-left w-full pb-2'>Extensive collection of songs across genres and languages.<br /><br />
//           Personalized playlists and recommendations based on listening patterns.</p>
//          </div>
//         </div>
        
//         <div className='fifthPart bg-black p-3 text-center'>
//           <h1 className='w-full border border-white'></h1>
//           <h1 className='text-white font-thin text-8xl mb-10'>Other Key Features</h1>
//           <div>
//             <h1 className='text-white font-semibold text-5xl mb-5'>
//               Monthly Subscription Plans
//             </h1>
//             <p className='text-white font-thin text-3xl mb-10'>
//               Subscribe to your favourite artist for early access to albums, enjoy unreleased tracks etc.
//             </p>
//           </div>
//           <div>
//             <h1 className='text-white font-semibold text-5xl mb-5'>
//               Live Streaming
//             </h1>
//             <p className='text-white font-thin text-3xl mb-10'>
//               Enjoy Live performace from your favourite artists. Artists Can Go live for all the fans or subsciber only sessions.
//             </p>
//           </div>
//           <div>
//             <h1 className='text-white font-semibold text-5xl mb-5'>
//               Gifting System
//             </h1>
//             <p className='text-white font-thin text-3xl mb-10'>
//               Contribute to your artist's wish-list so that they can produce more efficiently. <br />You can also buy them a coffee to show your support by the small contributuion. Lets Grow together.
//             </p>
//           </div>
//           <div>
//             <h1 className='text-white font-semibold text-5xl mb-5'>
//               Ticket Booking
//             </h1>
//             <p className='text-white font-thin text-3xl mb-10'>
//              Now book tickets of your favourite artist's live shows from their profile itself and keep track of there future events. All at One place.
//             </p>
//           </div>
//         </div>

//         <div className='text-center'>
//           <Link to="/signup" className="hover:bg-orange-600 px-6 py-3 rounded-lg bg-[#F2613F] my-4 mr-2 text-white text-lg font-semibold text-center">Sign Up</Link>
//         </div>
       
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default Home;
