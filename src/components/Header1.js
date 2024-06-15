import React from 'react';
import './Header1.css'; // 
// import {IMG1} from /image/CompIcon2.png
// swift: '/image/Swift2.png',

const Header1 = ({ Onheader, Onfooter, onVechicalModelsClick }) => {
  return (
    <div className='header fixed-header flex justify-between shadow-sm'>
      <div className='grid grid-flow-col'>
        <img className='span-2 w-28 mx-10 my-2' alt='logo' src='/image/CompIcon2.png' />
      </div>
      <div className='flex span-10'>
        <ul className='flex mx-12'>
          <li className='px-4 py-12 cursor-pointer font-semibold hover:text-blue-500' onClick={Onheader}>Home</li>
          <li className='px-4 py-12 cursor-pointer font-semibold hover:text-blue-500' onClick={Onfooter}>About</li>
          <li className='px-4 py-12 cursor-pointer font-semibold hover:text-blue-500' onClick={onVechicalModelsClick}>Vechical Models</li>
          <li className='px-4 py-12 cursor-pointer font-semibold hover:text-blue-500' onClick={Onfooter}>Contact</li>
          <li className='px-2 py-12 cursor-pointer font-semibold hover:text-blue-500'>SignIn</li>
          <div className='my-10'>
            <button className='px-2 py-2 mx-2 font-bold font-sans bg-orange-600 text-white'>Register</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Header1;
