import React, { useState } from 'react';

const CarBooking = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showPickDropDown, setShowPickDropDown] = useState(false);
  const [showDropOff, setShowDropOff] = useState(false);
  const [selectedDrop, setSelectedDrop] = useState('');
  const [selectedCar, setSelectedCar] = useState('');
  const [selectedPickUp, setSelectedPickUp] = useState('');

  const handleCarClick = (car) => {
    setSelectedCar(car);
    setShowDropDown(false);
  };

  const handlePickUp = (location) => {
    setShowPickDropDown(false);
    setSelectedPickUp(location);
  };

  const handleDrop = (location) => {
    setShowDropOff(false);
    setSelectedDrop(location);
  };

  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-center py-2 px-10 bg-gradient-to-r from-orange-500 to-yellow-500 mb-8 rounded-lg shadow-md">
        Book A Car Now
      </h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 p-4 relative">
          <h2 className="text-sm font-bold mb-2 text-center">Select Your Car <span className='text-red-500'>*</span></h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700 rounded-lg"
            placeholder="Search for a car"
            onClick={() => setShowDropDown(!showDropDown)}
            value={selectedCar}
            readOnly
            required
          />
          {showDropDown && (
            <ul className="absolute z-10 list-none shadow-md w-full text-center cursor-pointer bg-white rounded-lg transition-all duration-300 ease-in-out">
              {['Innova', 'I 20', 'Xuv 700', 'Swift', 'Nexon'].map((car) => (
                <li key={car} className="border-b border-gray-200">
                  <h2 className="text-sm font-bold py-2  hover:bg-blue-600" onClick={() => handleCarClick(car)}>
                    {car}
                  </h2>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full md:w-1/3 p-4 relative">
          <h2 className="text-sm font-bold mb-2 text-center">Pick Up <span className='text-red-500'>*</span> </h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700 rounded-lg"
            placeholder="Search for a location"
            onClick={() => setShowPickDropDown(!showPickDropDown)}
            value={selectedPickUp}
            readOnly
          />
          {showPickDropDown && (
            <ul className="absolute z-10 list-none shadow-md w-full text-center cursor-pointer bg-white rounded-lg transition-all duration-300 ease-in-out">
              {['Bengaluru', 'Hyderabad', 'Chennai', 'Goa', 'Mumbai'].map((location) => (
                <li key={location} className="border-b border-gray-200">
                  <h2 className="text-sm font-bold py-2  hover:bg-blue-600" onClick={() => handlePickUp(location)}>
                    {location}
                  </h2>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-full md:w-1/3 p-4 relative">
          <h2 className="text-sm font-bold mb-2 text-center">Drop Off  <span className='text-red-500'>*</span>  </h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700 rounded-lg"
              placeholder="Search for a location"
            onClick={() => setShowDropOff(!showDropOff)}
            value={selectedDrop}
            readOnly
          />
          {showDropOff && (
            <ul className="absolute z-10 list-none shadow-md w-full text-center cursor-pointer bg-white rounded-lg transition-all duration-300 ease-in-out">
              {['Bengaluru', 'Hyderabad', 'Chennai', 'Goa', 'Mumbai'].map((location) => (
                <li key={location} className="border-b border-gray-200">
                  <h2 className="text-sm font-bold py-2 hover:bg-blue-600" onClick={() => handleDrop(location)}>
                    {location}
                  </h2>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="flex justify-center -mx-4 mb-4">
        <div className="w-full md:w-[30%] p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Pick-Up Date  <span className='text-red-500'>*</span>  </h2>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 text-sm text-gray-700 rounded-lg"
          />
        </div>
        <div className="w-full md:w-[30%] p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Drop-Off Date  <span className='text-red-500'>*</span>  </h2>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 text-sm text-gray-700 rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300">
          Search
        </button>
      </div>
    </div>
  );
};

export default CarBooking;
