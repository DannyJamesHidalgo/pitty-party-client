export const getallEvents=()=>{
    return fetch("https://pitty-party-api.vercel.app/events",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}
