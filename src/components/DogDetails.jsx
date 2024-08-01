// DogDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom'; 
import { getDogById } from '../services/dog'; 
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export const DogDetails =()=>{
    const { id } = useParams(); 
    const [dog, setDog] = useState(null);
    const navigate = useNavigate(); 

    useEffect(() => {
        getDogById(id).then(setDog); 
    }, []);

    if (!dog) return <div>Loading...</div>

    return (
        <div className='flex justify-center items-center min-h-screen rounded-lg bg-blue-300'>
            <div className='w-3/4 max-w-6xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden h-auto'>
                <img className='w-full h-auto object-cover' src={dog.image_url || 'default_image_url'} alt={dog.name} /> 
                <div className='px-10 py-8'>
                    <div className='font-bold text-2xl mb-5 text-center'>{dog.name}</div> 
                    <p className='text-gray-700 text-base'>Story: {dog.story}</p>
                    <p className='text-gray-700 text-base'>Age: {dog.age}</p>
                    <p className='text-gray-700 text-base'>Gender: {dog.gender}</p>
                    <p className='text-gray-700 text-base'>Weight: {dog.weight}lb</p>
                    <div className='px-10 pt-8 pb-6'>
                        <button onClick={()=>navigate(`/application/${dog.id}`)}  className='inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-all duration-150 ease-in-out transform hover:scale-110'>
                                Apply to adopt here! 
                        </button>
                            </div>
                        </div>
                    </div>
                </div>
    
    );
}

