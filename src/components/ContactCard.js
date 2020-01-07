import React from 'react'

export default function ContactCard(props){
  return(
    <div className="contact-card">
      <img src={props.contact.imgUrl}/>
      <h1>{props.contact.name}</h1>
      <p>{props.contact.phone}</p>
      <p>{props.contact.email}</p>
    </div>

    

    )
}