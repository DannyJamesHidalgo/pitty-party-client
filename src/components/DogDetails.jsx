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

   
    return (
<div className=' flex flex-col md:flex-row items-center justify-center w-auto mx-auto'>
<div className='flex items-center justify-center w-auto md:max-w-2xl'>
<div class=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg max-w-auto" src={dog?.image_url}  alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{dog?.name}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{dog?.story} {dog?.name} is an {dog?.age} year old {dog?.gender}. <br/> {dog?.gender === 'Male' ? 'He' : 'She'} is "{dog?.health_status}" in health and {dog?.color} in color.<br/> {dog?.name} has been with us since {dog?.arrival_date}. <br/> If you are intrested in adopting {dog?.gender === 'Male' ? 'him' : 'her'} click the link below! </p>
        <a href="#"  onClick={()=>navigate(`/application/${dog.id}`)} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply here!
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
</div>


</div>



    
    
    
    
    
    














        // <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        //     <div className='w-3/4 max-w-6xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden h-auto'>
        //         <a href="#">
        //         <img className='rounded-t-lg' src={dog?.image_url || 'default_image_url'} alt={dog.name} /> 
        //         </a>
        //         <div className='px-10 py-8'>
        //             <div className='font-bold text-2xl mb-5 text-center'>{dog.name}</div> 
        //             <p className='text-gray-700 text-base'>Story: {dog.story}</p>
        //             <p className='text-gray-700 text-base'>Age: {dog.age}</p>
        //             <p className='text-gray-700 text-base'>Gender: {dog.gender}</p>
        //             <p className='text-gray-700 text-base'>Weight: {dog.weight}lb</p>
        //             <div className='px-10 pt-8 pb-6'>
        //                 <button onClick={()=>navigate(`/application/${dog.id}`)}  className='inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700 transition-all duration-150 ease-in-out transform hover:scale-110'>
        //                         Apply to adopt here! 
        //                 </button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
    
    );
}

