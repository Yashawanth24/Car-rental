import { useRef, useState } from 'react';
import CarBokking from './CarBokking';
import VechicalModels from './VechicalModels';

const CarBokkingPage=()=>{
    const [selectedcar, setSelectedcar]=useState(null)
    const carDetailsRef=useRef(null);

    const handelCar=(car)=>{
    setSelectedcar(car);
    carDetailsRef.current.scrollIntoView({behavior:"smooth"})
    };
    return (
        <div>
            <CarBokking onCarSelect={handelCar}/>
            <div ref={carDetailsRef}>
            <VechicalModels selectedcar={selectedcar}/>
            </div>
        </div>
    )

}
export default CarBokkingPage;