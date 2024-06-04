import React, { useState } from 'react';

const CarBooking = () => {
  const[showDropDown, setShowDropDown]=useState(false)
  const[showPickDropDown, setShowPickDropDown]=useState(false)
  const[showDropOff, setShowDropOff]=useState(false)
  const [selectdDrop, setSelectedDrop]=useState('')
  const [selectedCar,setSelcetedCar]=useState('')
  const [selectedpicks, setselectedpicks]=useState('')
  const handleCarClick=(car)=>{
    setSelcetedCar(car);
    setShowDropDown(false)

  }
  const handlePickUp=(location)=>{
 setShowDropDown(false);
 setselectedpicks(location)
  }
  const handleDrop=(location)=>{
    setShowDropOff(false)
    setSelectedDrop(location)
  }
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-center py-2 px-10 bg-gradient-to-r from-orange-500 to-yellow-500 mb-8">
        Book A Car Now
      </h1>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Select Your Car</h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700"
            placeholder="Search for a car" onClick={()=>setShowDropDown(!showDropDown)}
            value={selectedCar}
          />

        {showDropDown &&(  <ul className="list-none shadow-md w-full text-center cursor-pointer">
            {['BMW', 'Audi', 'Swift', 'I 20', 'Polo'].map((car) => (
              <li key={car} className="border-b border-gray-200">
                <h2 className="text-sm font-bold py-2 hover:bg-gray-100" onClick={()=>{handleCarClick(car)}}>
                  {car}
                  {setSelectedDrop(true)}
                  </h2>
                  
              </li>
            ))}
          </ul>
          )}
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Pick Up</h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700"
            placeholder="Search for a location" onClick={()=> setShowPickDropDown(!showPickDropDown)}
            value={selectedpicks}
          />
         { showPickDropDown && ( <ul className="list-none shadow-md w-full text-center cursor-pointer">
            {['Bengaluru', 'Hyderabad', 'Chennai', 'Goa', 'Mumbai'].map((location) => (
              <li key={location} className="border-b border-gray-200">
                <h2 className="text-sm font-bold py-2 hover:bg-gray-100" onClick={()=>{handlePickUp(location)}}
                
           >{location}</h2>
           se
              </li>
            ))}
          </ul>
          )}
        </div>
        <div className="w-full md:w-1/3 p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Drop Off</h2>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 mb-4 text-sm text-gray-700 "
            onClick={()=>setShowDropOff(!showDropOff)}
            value={selectdDrop}
          />
     { showDropOff &&(     <ul className="list-none shadow-md w-full text-center cursor-pointer">
            {['Bengaluru', 'Hyderabad', 'Chennai', 'Goa', 'Mumbai'].map((location) => (
              <li key={location} className="border-b border-gray-200">
                <h2 className="text-sm font-bold py-2 hover:bg-gray-100" onClick={()=>{handleDrop(location)}}>
                  {location}</h2>
              </li>
            ))}
          </ul>)}
        </div>
      </div>
      <div className="flex flex-wrap -mx-4 mb-4">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Pick-Up Date</h2>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 text-sm text-gray-700"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-sm font-bold mb-2 text-center">Drop-Off Date</h2>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 text-sm text-gray-700"
          />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-6 rounded">
          Search
        </button>
      </div>
    </div>
  );
};

export default CarBooking;
