import React from 'react'

// TODO: Pass down props as a parameter and take the parts of object you pass down to dyanmically create a unique contact for each component
// We can desreucture our props 


function Contact({avatar,name,number}) {
    console.log(avatar,name,number)



    return (
        <div className='contactContainer'>
            <div className="imageContainer">
                <img src= {avatar} alt=""></img>
            </div>

            <div className="contactInfo">
                <h2> {name} </h2>
                <h2> {number} </h2>
            </div>
        </div>
    )
}
export default Contact
