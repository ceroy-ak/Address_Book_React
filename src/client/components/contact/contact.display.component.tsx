import React from 'react'
import dummyContactDataList from '../../common/services/client.dummyData'
import edit_icon from '../../res/Edit-icon.png'
import delete_icon from '../../res/delete1.png'

function ContactDisplay() {

    const displayData = dummyContactDataList[0];
    
    const editFunction = () =>{
        console.log("Edit Called")
    }
    const deleteFunction = () => {
        console.log("Delete Called")
    }

    return (
        <div id="contactSelected">
            <div className="selected-row">
                <div className="selected-col-name">
                    <h1 id="selectedName">{displayData.name}</h1>
                </div>
                <div className="selected-col-btn">
                    <div id="selectedButtons">
                        <button id="selectedEdit" onClick={editFunction}>
                            <img src={edit_icon} alt="Edit" />
                EDIT
              </button>
                        <button id="selectedDelete" onClick={deleteFunction}>
                            <img src={delete_icon} alt="Delete" />
                DELETE
              </button>
                    </div>
                </div>
            </div>
            <p id="selectedEmail">Email: {displayData.email}</p>
            <p id="selectedMobile">Mobile: {displayData.mobile}</p>
            <p id="selectedLandline">Landline: {displayData.landline}</p>
            <p id="selectedWebsite">Website: {displayData.website}</p>

            <div className="selectedAddress">
                <div className="selectedAddressLeft">
                    <p>Address:</p>
                </div>
                <div className="selectedAddressRight">
                    <p>{displayData.address}</p>
                </div>
            </div>

        </div>
    )
}

export default ContactDisplay
