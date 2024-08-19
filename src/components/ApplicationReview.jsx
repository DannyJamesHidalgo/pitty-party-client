
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { deleteApplicationById, getApplicationById, postNewApplication, updateApplicationById } from '../services/application.js';
import { useNavigate } from 'react-router-dom';

export const ApplicationReview =({currentUser})=>{
    
const { id } = useParams();// has to be the same name as the address for it to match up 


const navigate = useNavigate(); 

const [formData, setFormData] = useState({});


useEffect(()=>{getApplicationById(parseInt(id)).then(setFormData)},[id])
  


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
          ...prevState,
          [name]: value
      }));
      console.log(formData)
  };
  const handleUpdate=(event)=>{
    event.preventDefault();
        
    let reqBody= {
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            adoption_pitch: formData.adoption_pitch,
            dog:formData.dog.id,
            adopter:formData.adopter.id
        }
       

    updateApplicationById(id,reqBody)
    navigate(`/myadoptions`)
   
}

const handleDelete = async () => {

    const isConfirmed = window.confirm("Are you sure you want to cancel the application? This action cannot be undone.");
    if (isConfirmed) {
        try {
            await deleteApplicationById(id);
            navigate(`/myadoptions`);
        } catch (error) {
            console.error("Failed to delete application:", error);
            // Optionally, handle the error, maybe show a notification or keep the user on the page
        }
};
  

}

  
  
  return (
 <div className='flex justify-center items-center min-h-screen bg-gray-100'>


          <form onSubmit={handleUpdate} className='  justify-center w-full max-w-4xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden space-y-8'>
          <img src={formData.dog?.image_url}  className="w-80 h-80 m-auto object-cover" />
              <h2 className="text-3xl font-bold text-center py-4">Review Application for {formData.dog?.name}!</h2>
              <div className="space-y-4">
                <h3 className='text-center'> please make any changes as needed or if you would like to cancel the the application click cancel below</h3>
                  <input type="text" value={formData.name} name="name" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                  <input type="email" value={formData.email} name="email" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                  <input type="tel" value={formData.phone_number} name="phone_number" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                  <textarea value={formData.adoption_pitch} name="adoption_pitch" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 resize-none" rows="4" required></textarea>
                  <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">Save Changes</button>
                  <button type="delete" onClick={handleDelete} className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">Delete</button>
              </div>
          </form>
      </div>
)}
