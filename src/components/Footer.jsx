import React from 'react';
import { RiHeartFill } from "@remixicon/react";

function Footer() {
  return (
    <footer className='bg-black p-4'>
      <h1 className='w-full border-t border-white mb-4'></h1>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center'>
        <div className='flex flex-col sm:flex-row gap-6 sm:gap-16'>
          <div>
            <div className='text-2xl sm:text-4xl text-white mb-4'>
              Company
            </div>
            <div className='text-white text-lg space-y-2'>
              <h1>Privacy Policy</h1>
              <h1>Terms of Service</h1>
              <h1>About Us</h1>
              <h1>Support</h1>
              <h1>Legal</h1>
              <h1>Mobile App</h1>
            </div>
          </div>
          <div>
            <div className='text-2xl sm:text-4xl text-white mb-4'>
              Contact Us
            </div>
            <div className='text-white text-lg flex gap-4'>
            <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg></h1>
//               <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg></h1>
//               <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.3499 5.55005C13.7681 5.55005 12.4786 6.81809 12.4504 8.39658L12.4223 9.97162C12.4164 10.3029 12.143 10.5667 11.8117 10.5608C11.7881 10.5604 11.7646 10.5586 11.7413 10.5554L10.1805 10.3426C8.12699 10.0625 6.15883 9.11736 4.27072 7.54411C3.67275 10.8538 4.84 13.1472 7.65342 14.916L9.40041 16.0142C9.68095 16.1906 9.7654 16.561 9.58903 16.8415C9.54861 16.9058 9.49636 16.9619 9.43504 17.0067L7.84338 18.1696C8.78973 18.229 9.68938 18.1875 10.435 18.0387C15.1526 17.0973 18.2897 13.547 18.2897 7.69109C18.2897 7.213 17.2774 5.55005 15.3499 5.55005ZM10.4507 8.3609C10.4983 5.69584 12.6735 3.55005 15.3499 3.55005C16.7132 3.55005 17.9465 4.10683 18.8348 5.0054C19.5462 5.00005 20.1514 5.17991 21.5035 4.35967C21.1693 6.00005 21.0034 6.71201 20.2897 7.69109C20.2897 15.3326 15.5926 19.0489 10.8264 20C7.5587 20.6522 2.80646 19.5815 1.44531 18.1587C2.13874 18.1054 4.95928 17.802 6.58895 16.6092C5.20994 15.6987 -0.278631 12.4681 3.32772 3.78642C5.02119 5.76307 6.73797 7.10855 8.47807 7.82286C9.63548 8.29798 9.91978 8.2885 10.4507 8.3609Z"></path></svg></h1>
            </div>
          </div>
        </div>
        <div className='text-white text-center sm:text-right mt-6 sm:mt-0'>
          <p>&copy; 2024 Music Community App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


// import React from 'react';
// import { RiHeartFill } from "@remixicon/react";

// function Footer() {
//   return (
//     <footer className='bg-black p-3 relative'>
//       <h1 className='w-full border border-white mb-4'></h1>
//       <div className='flex justify-between'>
//         <div className='flex gap-2'>
//           <div className='p-1'>
//             <div className='text-4xl text-white mb-7'>
//               <div>Company</div>
//             </div>
//             <div className='text-white p-1 text-lg'>
//               <h1>Privacy Policy</h1>
//               <h1>Terms of Service</h1>
//               <h1>About Us</h1>
//               <h1>Support</h1>
//               <h1>Legal</h1>
//               <h1>Mobile App</h1>
//             </div>
//         </div>
//           <div className='p-1'>
//             <div className='text-4xl text-white mb-7 px-2'>
//               <div>Contact Us</div>
//             </div>
//             <div className='text-white p-2 text-lg flex gap-3'>
//               <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 9H17.5L17 11H13V20H11V11H7V9H11V7.12777C11 5.34473 11.1857 4.69816 11.5343 4.04631C11.8829 3.39446 12.3945 2.88288 13.0463 2.53427C13.6982 2.18565 14.3447 2 16.1278 2C16.6498 2 17.1072 2.05 17.5 2.15V4H16.1278C14.8041 4 14.401 4.07784 13.9895 4.29789C13.6862 4.46011 13.4601 4.68619 13.2979 4.98951C13.0778 5.40096 13 5.80407 13 7.12777V9Z"></path></svg></h1>
//               <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg></h1>
//               <h1 className='size-12'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.3499 5.55005C13.7681 5.55005 12.4786 6.81809 12.4504 8.39658L12.4223 9.97162C12.4164 10.3029 12.143 10.5667 11.8117 10.5608C11.7881 10.5604 11.7646 10.5586 11.7413 10.5554L10.1805 10.3426C8.12699 10.0625 6.15883 9.11736 4.27072 7.54411C3.67275 10.8538 4.84 13.1472 7.65342 14.916L9.40041 16.0142C9.68095 16.1906 9.7654 16.561 9.58903 16.8415C9.54861 16.9058 9.49636 16.9619 9.43504 17.0067L7.84338 18.1696C8.78973 18.229 9.68938 18.1875 10.435 18.0387C15.1526 17.0973 18.2897 13.547 18.2897 7.69109C18.2897 7.213 17.2774 5.55005 15.3499 5.55005ZM10.4507 8.3609C10.4983 5.69584 12.6735 3.55005 15.3499 3.55005C16.7132 3.55005 17.9465 4.10683 18.8348 5.0054C19.5462 5.00005 20.1514 5.17991 21.5035 4.35967C21.1693 6.00005 21.0034 6.71201 20.2897 7.69109C20.2897 15.3326 15.5926 19.0489 10.8264 20C7.5587 20.6522 2.80646 19.5815 1.44531 18.1587C2.13874 18.1054 4.95928 17.802 6.58895 16.6092C5.20994 15.6987 -0.278631 12.4681 3.32772 3.78642C5.02119 5.76307 6.73797 7.10855 8.47807 7.82286C9.63548 8.29798 9.91978 8.2885 10.4507 8.3609Z"></path></svg></h1>
//             </div>
//           </div>
//         </div>
      
      
//       <div className='text-white p-1 absolute right-0 bottom-0'>
//         <p className=''>&copy; 2024 Music Community App. All rights reserved.</p>
//       </div>

//       </div>
      
      
      
//     </footer>
//   );
// }

// export default Footer;
