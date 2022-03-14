import React, { useEffect } from 'react'

function Logout() {

    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            window.location.replace("/authenticate");
            if (!response.status === 200) {
                const err = new Error(response.error);
                throw err;
            }
        }).catch((err) => {
            console.log(err);
        })
    })



    return (
        <div></div>
    )
}

export default Logout