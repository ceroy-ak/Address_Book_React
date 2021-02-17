import React from 'react'
import IContact from '../../common/interfaces/contact.interface'
import {useDispatch, useSelector} from 'react-redux'
import IState from '../../common/interfaces/contact.state.interface';
import {displaySelectedContact} from '../../common/services/redux/contact.actions'



interface IContactProp{
    value: IContact
}
function Contact({value}:IContactProp) {

    const dispatch = useDispatch();
    const contactId = useSelector((state:IState)=>state.contactId);

    const onClick = () => {
        dispatch(displaySelectedContact(value.id));
    }

    return (
        <div className={`contact ${(value.id === contactId)?'selected' : ''}`} onClick={onClick}>
            <h1 className="name">{value.name}<span className="tooltiptext">{value.name}</span></h1>
            <p className="email">{value.email}</p>
            <p className="mobile">{value.mobile}</p>
        </div>
    )
}


export default Contact
