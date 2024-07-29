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
        <main className='bg-gray-100 min-h-screen'>
            <section className='text-center p-8 bg-gradient-to-r from-green-400 via-grey-100 to-grey-500'>
                <h1 className='text-4xl font-bold text-grey'>Featured Dogs</h1>
                <p className='mt-2 text-white'>Discover our most recent rescues!</p>
            </section>

            <section className='grid grid-cols-3 gap-6 p-8'>
                {dogs.slice(0, 3).map((dog, index) => (
                    <div key={dog.id} className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
                        <img className='w-full h-48 object-cover' src={dog.image_url || "default_image_url"} alt={`Dog ${index + 1}`} />
                        <div className='px-6 py-4'>
                            <div className='font-bold text-xl mb-2'>{dog.name}</div>
                            <p className='text-gray-700 text-base'>{dog.description}</p>
                        </div>
                        <div className='px-6 pt-4 pb-2'>
                            <button className="inline-block bg-blue-500 text-white px-4 py-2 rounded transition duration-150 ease-in-out transform hover:scale-110" onClick={() => navigate(`/dogs/${dog.id}`)}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </section>

            <section className='text-center p-8 bg-gray-200'>
                <h2 className='text-3xl font-semibold'>Take Action Today</h2>
                <p className='mt-4 text-gray-600'>Join us in making a difference. Adopt a furry friend today.</p>
                <button onClick={() => navigate(`/AllDogs`)}className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">Adopt Now</button>
            </section>

            {/* About Us Section */}
            <section className='text-center p-8 bg-gray-300'>
                <h2 className='text-3xl font-semibold'>About Us</h2>
                <p className='mt-4 text-gray-700'>We are a dedicated team of volunteers who have come together to make a difference in the lives of Pit Bulls. Our mission is to rescue, rehabilitate, and rehome Pit Bulls from high-kill shelters across the country. With your support, we've been able to save over 500 Pit Bulls from euthanasia and find loving homes for each one.</p>
                <p className='mt-4 text-gray-700'>Our work doesn't stop there. We provide ongoing support to adoptive families, including training resources, veterinary care advice, and a strong community network. Together, we're changing perceptions and saving lives, one Pit Bull at a time.</p>
            </section>
        </main>
    );
}
  
  export default Home
