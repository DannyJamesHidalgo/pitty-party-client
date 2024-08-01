import React, { useEffect, useState } from "react";
import { getallDogs } from "../services/dog.js";
import { useNavigate } from 'react-router-dom';
import { getAllApplicationsByAdopterId } from "../services/application.js";

export const MyAdoptions=()=>{
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate(); 

    

  
  
  useEffect(() => {
    const localUser = localStorage.getItem("pitty_token")
    const currentUser = JSON.parse(localUser)
    // debugger
    
    // fetchTheDogs(currentUser)
   
    getAllApplicationsByAdopterId(currentUser.id).then(dogsArray => setApplications(dogsArray))
  
            
  }, [])
    

  

    
    
    
    
    
  return (
    <main className='bg-gray-300 min-h-screen flex items-center justify-center p-8'>
        <div>

<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Your Adoption Applications.</span></h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Feel free to review your adoption applications! </p>

        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto'>
            {applications.map((application, index) => (
                <div key={application.id} className='max-w-sm rounded-lg overflow-hidden shadow-lg bg-blue-300 p-6'>
                    <img className='w-full h-48 object-cover' src={application.dog?.image_url || "https://via.placeholder.com/150"} alt={`Dog ${index + 1}`} />
                    <div className='mt-4'>
                        <div className='font-bold text-xl mb-2'>{application.dog?.name}</div>
                    
                      
                    </div>
                    <div className='mt-4'>
                        <button onClick={() => navigate(`/applicationreview/${application.id}`)} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            View Application
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </main>
);
}