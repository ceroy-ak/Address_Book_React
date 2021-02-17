import React from 'react'
import Contact from './contact.component'
import {useSelector} from 'react-redux'
import IState from '../../common/interfaces/contact.state.interface'

function ContactList() {

    const contactListData = useSelector((state:IState)=>state.data)
    return (
        <div className="contacts-list">
            {
                contactListData.map((data)=>{
                    return <Contact key={data.id} value={data} />
                })
            }
        </div>
    )
}

export default ContactList
