import React from 'react'

const EditableLink = ({ id, email, link }) => {

    const deleteLink = async (e) => {

        e.preventDefault();

        let userLink = {
            email: email,
            _id : id
        }

        try {
            
            const response = await fetch("/deletelink", {
                method: "PATCH",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userLink)
            })

            const data = await response.json();

            if(!data || response.status === 400){
                window.alert("Error in deleting links");
            }
            else{
                window.alert("Link deleted");
                window.location.replace('/about');
            }


        } catch (error) {
            
        }
    }



    return (
        <div>
            <div className='flex space-x-10'>
                <h1>{link.linkTtile}</h1>
                <p>{link.url}</p>
                <button onClick={deleteLink}>DELETE</button>
            </div>
        </div>
    )
}

export default EditableLink