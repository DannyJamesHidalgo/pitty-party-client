export const postNewApplication = async (applicationData) => {
    try {
      
  
      const response = await fetch("http://localhost:8000/applications", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
         

        },
        body: JSON.stringify(applicationData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
     
      return data; 
    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
      
    }
  };


export const getAllApplicationsByAdopterId = (adopter_id) => {
  return fetch(`http://localhost:8000/applications?adopter_id=${adopter_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
    },
  }).then((res) => res.json());
};


export const getApplicationById =(App_id)=>{
  return fetch(`http://localhost:8000/applications/${App_id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
    },
  }).then((res) => res.json());

}


export const updateApplicationById = (app_id,requestBody)=>{
  return fetch(`http://localhost:8000/applications/${app_id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
    },
    body: JSON.stringify(requestBody),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    // Optionally, log the error to your server or a monitoring service
  });
}


export const deleteApplicationById = (appId) => {
  return fetch(`http://localhost:8000/applications/${appId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
    // Optionally, log the error to your server or a monitoring service
  });
  
}
