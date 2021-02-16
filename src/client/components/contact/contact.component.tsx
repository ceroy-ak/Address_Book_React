import React from 'react'
import IContact from '../../common/interfaces/contact.interface'


interface IContactProp{
    value: IContact
}
function Contact({value}:IContactProp) {

    const onClick = () => {
        console.log(value.id)
    }

    return (
        <div className="contact" onClick={onClick}>
            <h1 className="name">{value.name}</h1>
            <p className="email">{value.email}</p>
            <p className="mobile">{value.mobile}</p>
        </div>
    )
}

export default Contact
