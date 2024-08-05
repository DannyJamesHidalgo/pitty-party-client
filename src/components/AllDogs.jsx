import React, { useEffect, useState } from "react";
import { getallDogs } from "../services/dog.js";
import { useNavigate } from 'react-router-dom';


function AllDogs() {
    const [dogs, setDogs] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        getallDogs().then(dogsArray =>{
            setDogs(dogsArray)
        })
        
    }, []);
    
    
    
    
    
    return (
        <main className= "bg-center  bg-repeat bg-[url('https://cdn.vectorstock.com/i/500p/04/22/seamless-dog-pattern-with-paw-prints-bones-vector-44880422.jpg')]  bg-gray-500 bg-blend-multiply min-h-screen flex items-center justify-center">
            
       
            <div className='grid grid-cols-4 gap-6'>
                
            <div>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">All Rescues</span> </h1>
            </div>
                {dogs.map((dog, index) => (
                    <div key={dog.id} className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-200'>
                        <img className='w-full h-48 object-cover' src={dog.image_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8apkf3HyDCU2zv3nUr0DibTcZ04eHRKOcurGB6y9l-2adXYbDdQegc2ORW_PFq76sUiw&usqp=CAU"} alt={`Dog ${index + 1}`} />
                        <div className='px-4 py-4'>
                            <div className='font-bold text-xl mb-2 text-center'>{dog.name}</div>
                            <p className='text-gray-700 text-base'>{dog.description}</p>
                        </div>
                        <div className='px-4 pt-4 pb-2'>
                        <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => navigate(`/dogs/${dog.id}`)}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
 
        </main>
    );
  }
  
  export default AllDogs
