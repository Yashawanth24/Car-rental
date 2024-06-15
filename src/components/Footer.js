import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gray-700 text-white py-12'>
      <div className='container mx-auto w-[90%] md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center px-6'>
        <div className='my-4'>
          <h1 className='font-bold text-lg mb-4'>Contact Us</h1>
          <p className='py-1'>Phone: 123-456-7890</p>
          <p className='py-1'>Email: Car-Rental@gmail.com</p>
        </div>
        <div className='my-4'>
          <h1 className='font-bold text-lg mb-4'>Company</h1>
          <p className='py-1'>Bangalore</p>
          <p className='py-1'>Careers</p>
          <p className='py-1'>Mobile</p>
        </div>
        <div className='my-4 flex flex-col items-center md:items-start'>
          <h1 className='font-bold text-lg mb-4'>Subscribe</h1>
          <p className='py-1 text-center md:text-left'>Subscribe your email address for latest news & updates</p>
          <div className="flex flex-col md:flex-row items-center w-full mt-4">
            <input
              type='email'
              placeholder='Enter your email'
              className='px-4 py-2 w-full md:w-auto rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-orange-600 px-4 py-2 mt-2 md:mt-0 md:ml-2 rounded-md text-white hover:bg-orange-700 transition-all duration-300'>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
