import React from 'react';
import logo from './logo.svg';


// const Header = () => {
//   return (
//     <>
//     <header>
//       <div className="logo">
//          <img src={logo} alt="Blog Logo" />
//       </div>
//       <nav className='navbar'>
//         <ul>
//           <li>
//             Home
//           </li>
          
//           <li>
//             Services
//           </li>
//           <li>
//            Career
//           </li>
//           <li>
//             Contact
//           </li>
          {/* <button className='btn'>
            Join now
          </button> */}
//         </ul>
//         </nav>
      
      
//     </header>
//     </>
//   );
// };

// export default Header;




const Header = () => {
  
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Blog Logo" />
      </div>
     <div className="home-container">
      <nav className='navbar'>
        <ul>
        <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="src/components/Services.js">Services</a>
          </li>
          <li>
            <a href="/career">Career</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      </div>
      <button className="custom-btn btn-9">Join Now</button>
    </header>
  );
};

export default Header;

