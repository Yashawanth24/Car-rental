import React from 'react';

const Body = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-6">
      <div className="py-20">
        <div className="text-5xl font-bold text-center">
          <span className="block pb-4 ">Plan Your Trip Now</span>
          <span className="block pb-4 text-red-600">Save Big With</span>
          <span>Our Car Rental</span>
          <div className="text-lg flex justify-center">
            <button className='bg-orange-700 mt-10 py-2 px-6 text-xl'>
              Book Ride
            </button>
            <div className="ml-4">
              <button className='bg-transparent mt-10 py-2 px-4 text-black text-xl'>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 h-60">
        <img alt="Car" src="/image/carBody.png" className="object-cover" />
      </div>
    </div>
  );
};

export default Body;