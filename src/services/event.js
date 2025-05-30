export const getallEvents=()=>{
    return fetch("https://lobster-app-bbl8x.ondigitalocean.app/events",
        {
            headers: {
                Authorization: `Token ${JSON.parse(localStorage.getItem("pitty_token")).token}`
            }
        }

    ).then((res) => res.json())
}
