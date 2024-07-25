
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postNewApplication } from '../services/application.js';
import { useNavigate } from 'react-router-dom';



export  const AdoptionApplicationForm = () =>{ 


  const { dogId } = useParams();
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate(); 

  
  useEffect(() => {
    const localUser = localStorage.getItem("pitty_token")
    const UserObject = JSON.parse(localUser)
    // debugger
    setCurrentUser(UserObject)
  }, [])
    

  useEffect(()=>{
  setFormData({name: '',
    email: '',
    phone_number: '',
    adoption_pitch: '',
    dog: parseInt(dogId),
    adopter: currentUser.id,})

  },[currentUser])
    
  const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        adoption_pitch: '',
        dog: parseInt(dogId),
        adopter: currentUser.id,
        
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSubmit=()=>{
       postNewApplication(formData)
       navigate(`/myadoptions`)
       



       
    }

    
    
    return (
   <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <form onSubmit={handleSubmit} className='w-full max-w-4xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden space-y-8'>
                <h2 className="text-3xl font-bold text-center py-4">Adopt a Dog Application</h2>
                <div className="space-y-4">
                    <input type="text" placeholder="Your Name" name="name" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                    <input type="email" placeholder="Email Address" name="email" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                    <input type="tel" placeholder="Phone Number" name="phone_number" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                    <textarea placeholder="Why do you want to adopt?" name="adoption_pitch" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 resize-none" rows="4" required></textarea>
                    <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">Submit Application</button>
                </div>
            </form>
        </div>
  );}
  
   