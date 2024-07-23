// DogDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're fetching details based on URL parameters
import { getDogById } from '../services/dog'; // Assuming this function fetches dog details based on an ID from the URL
import { useState,useEffect } from 'react';
 



export const DogDetails =()=>{
    const { id } = useParams(); // Extracts the dog ID from the URL
    const [dog, setDog] = useState(null);

    useEffect(() => {
        getDogById(id).then(setDog); // Fetch dog details when the component mounts
    }, []);

    if (!dog) return <div>Loading...</div>; // Show loading state until dog details are fetched

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='max-w-4xl mx-auto my-10 md:max-w-4xl p-6 rounded-lg shadow-xl bg-white overflow-hidden'>
                <img className='w-full h-96 object-cover' src={dog.image_url || 'default_image_url'} alt={dog.name} />
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>{dog.name}</div>
                    <p className='text-gray-700 text-base'>{dog.description}</p>
                        <div className='px-6 pt-4 pb-2'>
                            {/* Example action button */}
                            <button className='inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all duration-150 ease-in-out transform hover:scale-110'>
                                Adopt
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    
    );
}

