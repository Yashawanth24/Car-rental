import React from 'react'

const Footer = () => {
  return (
    <div className='bg-gray-600 text-white mt-10 py-12'>
      <div className='container mx-auto w-[70%] grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-center px-6'>
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
        <div className='my-4 flex flex-col items-center'>
          <h1 className='font-bold text-lg mb-4'>Subscribe</h1>
          <p className='py-1'>Subscribe your email address for latest news & updates</p>
          <div className="flex items-center">
            <input
              type='email'
              placeholder='Enter your email'
              className='mt-4 px-4 py-2 w-full rounded-md bg-gray-700 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
            />
            <button className='bg-orange-700 px-4 py-3 pt-2 ml-2 mt-2  rounded-md text-white' style={{ marginTop: '8px' }}>SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
