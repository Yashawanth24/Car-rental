import React from 'react';

const Testimonials = [
    {
        name: "Sudeep",
        comment: "Smooth process from booking to returning the car. Great selection and excellent customer service.",
        photo: "/image/test3.png"
    },
    {
        name: "Raju",
        comment: "The best car rental experience I've had! Everything was quick and efficient. I'll be a returning customer for sure.",
        photo: "/image/test5.png"
    },
    {
        name: "Suresh",
        comment: "I was very impressed with the service. The car was clean and in great condition.",
        photo: "/image/test7.png"
    }
];

const Testimonial = () => {
    return (
        <div >
            <h1 className='text-3xl font-bold text-center py-4'>
                What Our Customers Say
            </h1>
        <div className="flex flex-wrap justify-center gap-4 py-14">
            {Testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 w-72 flex flex-col items-center">
                    <img src={testimonial.photo} alt={testimonial.name} className="rounded-full w-24 h-24 mb-4"/>
                    <p className="font-bold mb-2">{testimonial.name}</p>
                    <p className="text-gray-600 text-center">{testimonial.comment}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Testimonial;
