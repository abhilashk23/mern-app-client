import React, { useEffect } from 'react'
import EditableLink from '../EditableLink/EditableLink';

function UserLinks() {

    const [userData, setUserData] = React.useState();
    const [links, setLinks] = React.useState([]);

    const callAboutPage = async () => {
        try {

            const response = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                credentials: "include"
            })

            const data = await response.json();
            setUserData(data);
            setLinks(data.links);

            if (!response.status === 200) {
                const err = new Error(response.error);
                throw err;
            }


        } catch (error) {
            console.log(error);
            window.location.replace('/authenticate');
        }
    }

    useEffect(() => {
        callAboutPage();
    }, [])


    return (
        <div>
            <div>
                {(links.length >0) ? (links.map(link => <EditableLink id={link._id} email={userData.email} link={link} /> )) : (<h1>Your Linktree is empty.</h1>)}
            </div>
        </div>
    )
}

export default UserLinks