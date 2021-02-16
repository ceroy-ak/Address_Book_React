import React from 'react'
import dummyContactDataList from '../../common/services/client.dummyData'
import Contact from './contact.component'

function ContactList() {

    return (
        <div className="contacts-list">
            {
                dummyContactDataList.map((data)=>{
                    return <Contact key={data.id} value={data} />
                })
            }
        </div>
    )
}

export default ContactList
