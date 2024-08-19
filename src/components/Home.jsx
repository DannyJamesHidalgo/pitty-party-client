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
        <main className='bg-gray-500 min-h-screen'>
            
        <div class="bg-center bg-repeat bg-[url('https://c8.alamy.com/comp/2WTYPDR/different-dogs-isolated-on-a-white-background-endless-texture-seamless-pattern-design-for-fabric-decor-wallpaper-wrapping-paper-printing-2WTYPDR.jpg')" >
            <section  className='text-center p-8'>

                <h1 class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-300">Open your heart, save a life: Adopt a pit bull today. These loyal, loving dogs deserve a second chance. Be the hero they're waiting for</h1>
                <h2  className="text-2xl font-bold dark:text-white">New rescues bellow!</h2>
            </section>
            <div className="mx-auto flex items-center justify-center">
                <section className='flex flex-wrap justify-center gap-6 p-8'>
                 {dogs.slice(0, 4).map((dog) => (
                    
                  <figure key={dog.id} className=" w-80 h-80 mx-auto  transition-all duration-300 cursor-pointer hover:scale-110   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden relative">
                  <a href="#">
                   <img onClick={() => navigate(`/dogs/${dog.id}`)} className="w-full h-full object-cover object-center" src={dog.image_url} alt=""  />
                  </a>
                </figure>
                ))}
                </section>
            </div>
        </div>
            <section className='text-center p-8 bg-gray-200'>
                <h2 className='text-3xl font-semibold'>Take Action Today</h2>
                <p className='mt-4 text-gray-600'>Join us in making a difference. Adopt a furry friend today.</p>
                <button onClick={() => navigate(`/AllDogs`)}className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Adopt Now</button>
            </section>

            
            <section className='text-center p-8 bg-green-100'>
                <h2 className='text-3xl font-semibold'>About Us</h2>
               <div className=" w-1/2 m-auto">
                <p className='mt-4 text-gray-700'>We are a dedicated team of volunteers who have come together to make a difference in the lives of Pit Bulls. Our mission is to rescue, rehabilitate, and rehome Pit Bulls from high-kill shelters across the country. With your support, we've been able to save over 500 Pit Bulls from euthanasia and find loving homes for each one.</p>
                <p className='mt-4 text-gray-700'>Our work doesn't stop there. We provide ongoing support to adoptive families, including training resources, veterinary care advice, and a strong community network. Together, we're changing perceptions and saving lives, one Pit Bull at a time.</p>
                </div>
            </section>
        </main>
    );
}
  
  export default Home
