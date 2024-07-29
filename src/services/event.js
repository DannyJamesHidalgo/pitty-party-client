export const getallEvents=()=>{
    return fetch("http://localhost:8000/events",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}
