import React, { useState } from 'react';


const imagePaths = {
  swift: '/image/Swift2.png',
  i20: '/image/i 20.png',
  innvo: '/image/innvo.png',
  Xuv:"/image/Xuv700.png",
  Nexon:"/image/Nexon.png"
};

const cars = [
  {
    id: 1,
    name: "Innova",
    image: imagePaths.innvo,
    model: 'Innov',
    mark: "Crysta",
    Year: "2020",
    Ac: "Yes",
    Fule: "Diesel",
    Price:'6500/Day'
  },
  
  {
    id: 2,
    name: "I20",
    image: imagePaths.i20,
    model: 'Hyundai',
    mark: "I 20",
    Year: "2021",
    Ac: "Yes",
    Fule: "Petrol",
    Price:'4500/Day'
  },

  {
    id: 3,
    name: "Xuv 700",
    image: imagePaths.Xuv,
    model: 'Xuv',
    mark: "700",
    Year: "2022",
    Ac: "Yes",
    Fule: "Diesel",
      Price:'6000/Day'
  },
  {
    id: 4,
    name: "Swift",
    image: imagePaths.swift,
    model: 'Maruthi Swift',
    mark: "Swift",
    Year: "2023",
    Ac: "Yes",
    Fule: "Petrol",
      Price:'4000/Day'
  },
  {
    id: 5,
    name: "Nexon",
    image: imagePaths.Nexon,
    model: 'Tata Nexon',
    mark: "Nexon",
    Year: "2022",
    Ac: "Yes",
    Fule: "Petrol",
      Price:'5000/Day'
  },
];

const CarListItem = ({ car, onClick, isSelected }) => (
  <li
    key={car.id}
    onClick={() => onClick(car)}
    className={`py-2 cursor-pointer transition duration-300 text-center ${isSelected ? 'bg-orange-500' : ''}`}
    >
    <p className="text-xl font-medium ">{car.name}</p>
  </li>
);

const CarDetails = ({ car }) => (
  <div className="p-6 border border-gray-300 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-4 text-center bg-blue-600 py-2">{car.Price}</h2>
    <table className="min-w-full bg-white">
      <tbody>
        <tr className="w-full border-t border-gray-300">
          <td className="px-4 py-2 text-left font-semibold">Model</td>
          <td className="px-4 py-2 text-left">{car.model}</td>
        </tr>
        <tr className="w-full border-t border-gray-300">
          <td className="px-4 py-2 text-left font-semibold">Mark</td>
          <td className="px-4 py-2 text-left">{car.mark}</td>
        </tr>
        <tr className="w-full border-t border-gray-300">
          <td className="px-4 py-2 text-left font-semibold">Year</td>
          <td className="px-4 py-2 text-left">{car.Year}</td>
        </tr>
        <tr className="w-full border-t border-gray-300">
          <td className="px-4 py-2 text-left font-semibold">AC</td>
          <td className="px-4 py-2 text-left">{car.Ac}</td>
        </tr>
        <tr className="w-full border-t border-gray-300">
          <td className="px-4 py-2 text-left font-semibold">Fuel</td>
          <td className="px-4 py-2 text-left">{car.Fule}</td>
        </tr>
      </tbody>
    </table>
   
  </div>
  
);

const VechicalModels = () => {
  const [currentCar, setCurrentCar] = useState(cars[0]);
  const [selectedCarID, setSelectedCarID]=useState(cars[0].id);
  const [showCarBooking, setShowcarBooking]=useState(false)
 

  const handleClick = (car) => {
    setCurrentCar(car);
    setSelectedCarID(car.id)
  };
 
  return (
    <div className="flex flex-row p-6 space-x-4">
      <div className="w-[24%] py-8 mx-6">
        <h1 className="text-4xl  font-serif font-extrabold text-center">Cars</h1>
        <ul className="mt-2">
          {cars.map((car) => (
            <CarListItem key={car.id} car={car} onClick={handleClick} 
            isSelected={car.id===selectedCarID}
            />
          ))}
        </ul>
      </div>
      <div className="w-[43%] flex justify-center">
        {currentCar && (
          <img
            src={currentCar.image}
            alt={currentCar.name}
            className="w-96 h-56"
          />
        )}
      </div>
      <div className="w-[26%] my-4">
        {currentCar && <CarDetails car={currentCar} />}
        <div className='flex justify-center'>
        <button className='py-2 px-6 mx-2 my-2 bg-orange-500 font-bold'>Reserve Now</button>
        </div>
        
      </div>
    </div>
  );
};

export default VechicalModels;
