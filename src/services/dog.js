export const getallDogs=()=>{
    return fetch("https://pitty-party-api.vercel.app/dogs",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}

export const getDogById=(dogId)=>{
    return fetch(`https://pitty-party-api.vercel.app/dogs/${dogId}`,
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}