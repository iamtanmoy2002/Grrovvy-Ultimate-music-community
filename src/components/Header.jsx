import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/imageedit_1_3362984823.png'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto p-3 flex justify-between items-center text-center">
        <div className="flex items-center justify-between">
          <Link to="/" className="size-20 object-cover"><img className='size-20 object-cover ' src={Logo} alt="logo1" /></Link>
          <name className="text-[28px] mr-10">Grrovvy</name>

          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Home</Link>
            <Link to="/music-library" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Music Library</Link>
            <Link to="/marketplace" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Marketplace</Link>
            <Link to="/blog" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Blog</Link>
            <Link to="/podcasts" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Podcasts</Link>
            <Link to="/book-tickets" className="hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg">Book Tickets</Link>

            
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="hover:border hover:border-white px-4 py-2 rounded-lg mr-1 my-4">Login</Link>
          <Link to="/signup" className="hover:bg-orange-600 px-4 py-2 rounded-lg bg-[#F2613F] my-4 mr-2">Sign Up</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link to="/music-library" className="block px-4 py-2 hover:bg-gray-600">Music Library</Link>
          <Link to="/marketplace" className="block px-4 py-2 hover:bg-gray-600">Marketplace</Link>
          <Link to="/blog" className="block px-4 py-2 hover:bg-gray-600">Blog</Link>
          <Link to="/podcasts" className="block px-4 py-2 hover:bg-gray-600">Podcasts</Link>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-600">Login</Link>
          <Link to="/signup" className="block px-4 py-2 hover:bg-gray-600">Sign Up</Link>
          <Link to="/Book-tickets" className="block px-4 py-2 hover:bg-gray-600">Book Tickets</Link>
        </div>
      )}
    </header>
  );
}

export default Header;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Logo from '../assets/imageedit_1_3362984823.png'


// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };
//   return (
//     <header>
//       <nav className='bg-black text-white flex justify-between text-center items-center'>
//         <div className='flex'>
//           <logo>
//             <img className='size-20 object-cover ' src={Logo} alt="logo1" />
//           </logo>
//           <name className="text-[28px]  py-4">Grrovvy</name>
//         </div>
//         <div className='flex items-center'>
//           <button className='hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg'><Link to="/">Home</Link></button>
//           <button className='hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg'><Link to="/music-library">Music Library</Link></button>
//           <button className='hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg'><Link to="/marketplace">Marketplace</Link></button>
//           <button className='hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg'><Link to="/blog">Blog</Link></button>
//           <button className='hover:border hover:border-white my-4 mx-1 py-1 px-3 rounded-lg'><Link to="/podcasts">Podcasts</Link></button>
//         </div>
//         <div className="flex items-center">
//           <button className='hover:border hover:border-white px-4 py-2 rounded-lg mr-1 my-4'>
//             <Link to="/login">Login</Link>
//           </button>
//           <button className='hover:bg-orange-600 px-4 py-2 rounded-lg bg-[#F2613F] my-4 mr-2'>
//             <Link to="/signup">Sign Up</Link>
//           </button>
//         </div>
//         </nav>
//     </header>
//   );
// }

// export default Header;
