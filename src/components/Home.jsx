import React, { useEffect, useState } from "react";
import { getallDogs } from "../services/dog.js";
import { useNavigate } from 'react-router-dom';


function Home() {
    const [dogs, setDogs] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        getallDogs().then(dogsArray =>{
            setDogs(dogsArray)
        })
        
    }, []);
    
    
    
    
    
    return (
        <main className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='grid grid-cols-4 gap-6'>
                {dogs.map((dog, index) => (
                    <div key={dog.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                        <img className='w-full h-48 object-cover' src={dog.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8apkf3HyDCU2zv3nUr0DibTcZ04eHRKOcurGB6y9l-2adXYbDdQegc2ORW_PFq76sUiw&usqp=CAU"} alt={`Dog ${index + 1}`} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>{dog.name}</div>
                            <p className='text-gray-700 text-base'>{dog.description}</p>
                        </div>
                        <div className='px-6 pt-4 pb-2'>
                            {/* Example action button */}
                            
                            <button className="inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-150 ease-in-out transform hover:scale-110" onClick={() => navigate(`/dogs/${dog.id}`)}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
  }
  
  export default Home
