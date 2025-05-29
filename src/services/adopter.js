export const getAdopterById = async (App_id) => {
    try {
      const response = await fetch(`https://pitty-party-api.vercel.app/adopters/${App_id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`,
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error; // Rethrow the error to handle it outside or log it
    }
  };