export const getallEvents=()=>{
    return fetch("https://pitty-app-nb9rf.ondigitalocean.app/events",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}
