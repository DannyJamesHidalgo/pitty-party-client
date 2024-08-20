
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { postNewApplication } from '../services/application.js';
import { useNavigate } from 'react-router-dom';
import { getDogById } from '../services/dog.js';
import { getAdopterById } from '../services/adopter.js';



export  const AdoptionApplicationForm = () =>{ 


  const { dogId }                              = useParams();
  const [currentUser, setCurrentUser]          = useState({})
  const [adopter,setAdopter]                   = useState({})
  const navigate                               = useNavigate();
  const [dogObject, setDogObject]              = useState({})
  const [radioSelections, setRadioSelections]  = useState({
    question_1: "",
    question_2: "",
    question_3: ""
  });
 
  const [formData, setFormData] = useState({
  name           : '',
  email          : '',
  phone_number   : '',
  adoption_pitch : '',
  dog            : parseInt(dogId),
  adopter        : currentUser.id,
  question_1     : radioSelections.question_1,
  question_2     : radioSelections.question_2,
  question_3     : radioSelections.question_3
        
      });
  
  useEffect(() => {
    const localUser = localStorage.getItem("pitty_token")
    const UserObject = JSON.parse(localUser)
    // debugger
    setCurrentUser(UserObject)
  console.log(UserObject)
    getAdopterById(UserObject.id).then(setAdopter)
   
  }, [])

  useEffect(()=>{

    let id = parseInt(dogId);
    getDogById(id).then(setDogObject)

  },[dogId])
 


  useEffect(()=>{
  setFormData({name: '',
    email: '',
    phone_number: '',
    adoption_pitch: '',
    dog: parseInt(dogId),
    adopter: currentUser.id,
  
  question_1 : false,
  question_2 : false,
  question_3 : false,
})
    
  },[currentUser])
    
 

    const handleChange = (e) => {
        const { name, value }  = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name] : value
        }));
    };
    
    const handleSubmit=(event)=>{
      event.preventDefault()
      formData.question_1  = radioSelections.question_1;
      formData.question_2  = radioSelections.question_2;
      formData.question_3  = radioSelections.question_3;
       postNewApplication(formData)
       navigate(`/myadoptions`)
      }



    const handleRadioChange = (e) => {
        const { name, value }  = e.target;
        const boolValue        = value  === "yes" ? true : false;
        setRadioSelections(prevState => ({
          ...prevState,
          [name]: boolValue
        }));
      };

    
    
    return (
        <div  className  = 'flex justify-center items-center min-h-screen bg-gray-100'>
            <form onSubmit   = {(event) => handleSubmit(event)} className  = 'w-full max-w-4xl mx-auto my-16 p-10 rounded-lg shadow-xl bg-white overflow-hidden space-y-8'>
                             
                <h2 className  = "text-3xl font-bold text-center py-4">Application for {dogObject.name}</h2>
                
                <div className  = "space-y-4">
                    
                <div>
                    <label>Name:</label>
                    <input type="text" placeholder="Your Name" name="name" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                </div>
                    
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Email Address" name="email" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                </div>
                <div>
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Phone Number" name="phone_number" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600" required />
                </div>

                <div>
                  {/* Radio button questions */}
                  <h3 className='font-bold text-center pb-4'>Please answer a few questions below</h3>
                  <p> Do you have experience with dogs?</p>
                  <div justify>
                    <input type="radio" id="yes1" name="question_1" value="yes" onChange={handleRadioChange} required className="p-1 mr-2" />
                    <label htmlFor="yes1" className="mr-2">Yes</label>
                    <input type="radio" id="no1" name="question_1" value="no" onChange={handleRadioChange} required className="p-1 ml-2" />
                    <label htmlFor="no1" className="ml-2">No</label>
                  </div>
                </div>
                <div>
                  <p>Are you willing to train your dog?</p>
                  <div>
                    <input type="radio" id="yes2" name="question_2" value="yes" onChange={handleRadioChange} required className="p-1 mr-2" />
                    <label htmlFor="yes2" className="mr-2">Yes</label>
                    <input type="radio" id="no2" name="question_2" value="no" onChange={handleRadioChange} required className="p-1 ml-2" />
                    <label htmlFor="no2" className="ml-2">No</label>
                  </div>
                </div>
                <div>
                  <p>Will you have a fenced in yard or property?</p>
                  <div>
                    <input type="radio" id="yes3" name="question_3" value="yes" onChange={handleRadioChange} required className="p-1 mr-2" />
                    <label htmlFor="yes3" className="mr-2">Yes</label>
                    <input type="radio" id="no3" name="question_3" value="no" onChange={handleRadioChange} required className="p-1 ml-2" />
                    <label htmlFor="no3" className="ml-2">No</label>
                  </div>
                </div>

                <div>
                   <label>Tell us why you would be a good fit for {dogObject.name}</label>
                   <textarea placeholder="Why do you want to adopt?" name="adoption_pitch" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-600 resize-none" rows="4" required></textarea>
                </div>
                    <button type="submit" className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">Submit Application</button>
                </div>
            </form>
        </div>
  );}
  




  
   
