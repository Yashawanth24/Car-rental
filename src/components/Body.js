import React from 'react';

const Body = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-2 gap-6 bg-gray-100 min-h-3.5 max-w-full">
      <div className="py-20">
        <div className="text-center">
          <span className="block text-5xl font-bold pb-4">Plan Your Trip Now</span>
          <span className="block text-5xl font-bold text-red-600 pb-4">Save Big With</span>
          <span className="block text-4xl font-bold">Our Car Rental</span>
          <h4 className="text-sm font-medium pt-4 pb-2 text-gray-700">Start planning your next adventure now and discover</h4>
          <h4 className="text-sm font-medium text-gray-700">how much you can save with our affordable car rental options</h4>
          <div className="text-lg flex justify-center">
            <button className="bg-orange-700 mt-8 py-2 px-6 text-xl text-white font-bold">
              Book Ride
            </button>
            <div className="ml-4">
              <button className="bg-transparent mt-8 py-2 px-2 text-black text-base border-2 border-black font-bold">
                Learn More ↗
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
