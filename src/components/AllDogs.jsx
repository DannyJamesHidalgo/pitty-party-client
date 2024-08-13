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
        <main className= "mx-auto flex items-center justify-center">
            
       
            <div>
                
            <div>
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">All Rescues</span> </h1>
            </div>
                <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-4'>
                {dogs.map((dog) => (
                  <figure key={dog.id} className=" w-80 h-80 mx-auto  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative">
                    <a href="#">
                     <img onClick={() => navigate(`/dogs/${dog.id}`)} className="w-full h-full object-cover object-center" src={dog.image_url} alt=""  />
                    </a>
                  </figure>
            
                ))}
            </div>
            </div>
            
 
        </main>
    );
  }
  
  export default AllDogs
