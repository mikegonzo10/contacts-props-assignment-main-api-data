import React from 'react'
import Contact from './Contact'

function Contactslist({contacts}) {
    console.log(contacts)
    return (
        <div className='Contactslist'>
            <div className="title">
                <h1>Contact </h1>
            </div>
        {contacts.map ((contact) => {
          return <Contact name = {contact.name} number = {contact.phone} avatar = {contact.avatar || 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg'}/> 
        })}   
        </div>
    
    )
}

export default Contactslist