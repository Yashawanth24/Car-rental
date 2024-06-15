import React from 'react';

function ChooseUs() {
  return (
   
    <section className="py-12">
      <div className="container mx-auto px-4 ">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-400 to-blue-800 text-white py-10 shadow-lg rounded-lg">
  Discover Why We're the Best Choice for Your Car Rental Needs
</h1>

        <img
          className="flex justify-center w-full md:w-[78%] mx-auto py-6 mb-8 md:mb-0"
          src='/image/main1.png'
          alt="car_img"
        />
        <div className="flex flex-col md:flex-row items-start md:space-x-8 my-20 bg-slate-300 py-6 px-6">
          <div className="md:w-1/2">
            <div className="mb-8 my-10">
              <h4 className="text-xl font-semibold text-blue-700">Why Choose Us</h4>
              <h2 className="text-3xl font-bold mt-2 mb-4">Best valued deals you will ever find</h2>
              <p className="text-gray-900 text-lg">
                Discover the best deals you'll ever find with our unbeatable
                offers. We're dedicated to providing you with the best value
                for your money, so you can enjoy top-quality services and
                products without breaking the bank. Our deals are designed to
                give you the ultimate renting experience, so don't miss out on
                your chance to save big.
              </p>
              <a href="#home" className="text-blue-700 font-semibold inline-flex items-center mt-4">
                Find Details
              </a>
            </div>
          </div>
          <div className="md:w-1/2 py-4 px-6">
            <div className="flex items-start space-x-4 mb-8">
            <img className="w-16 h-16 rounded-full" src='/image/crossState.jpg' alt="Cross Country Drive"/>
              <div >
                <h4 className="text-xl font-semibold">Cross State Drive</h4>
                <p className="text-gray-800">
                  Take your driving experience to the next level with our
                  top-notch vehicles for your cross-country adventures.
                </p>
              </div>
       
            </div>
            <div className="flex items-start space-x-4 mb-8">
            <img className="w-20 h-20 rounded-full pl-2 bg-orange-200" src='/image/ruppe2.jpg' alt="All Inclusive Pricing"/>
              <div>
                <h4 className="text-xl font-semibold">All Inclusive Pricing</h4>
                <p className="text-gray-800">
                  Get everything you need in one convenient, transparent
                  price with our all-inclusive pricing policy.
                </p>
              </div>
              
            </div>
            <div className="flex items-start space-x-4">
            <img className="w-16 h-16 rounded-full " src='/image/Nocharges.png' alt="No Hidden Charges"/>
              <div>
                <h4 className="text-xl font-semibold">No Hidden Charges</h4>
                <p className="text-gray-800">
                  There are no hidden charges. We believe in transparent and honest pricing.
                </p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
