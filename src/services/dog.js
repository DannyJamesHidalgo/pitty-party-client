export const getallDogs=()=>{
    return fetch("http://localhost:8000/dogs",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}

export const getDogById=(dogId)=>{
    return fetch(`http://localhost:8000/dogs/${dogId}`,
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}