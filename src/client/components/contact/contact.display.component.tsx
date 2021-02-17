import React from 'react'
import edit_icon from '../../res/Edit-icon.png'
import delete_icon from '../../res/delete1.png'
import {connect} from 'react-redux'
import IState from '../../common/interfaces/contact.state.interface'
import IContact from '../../common/interfaces/contact.interface'
import {deleteContact, displayEditForm} from '../../common/services/redux/contact.actions'


interface IDisplayDataProp{
    displayData:IContact
    deleteDispatcher: Function
    displayEditForm: Function
}

function ContactDisplay({displayData, deleteDispatcher, displayEditForm}:IDisplayDataProp) {
    
    const editFunction = () =>{
        displayEditForm(displayData.id)
    }
    const deleteFunction = () => {
        if(window.confirm('Are you sure you want to delete it?'))
            deleteDispatcher(displayData.id)
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
                <p className="selectedAddressLeft">Address:</p>
                <p className="selectedAddressRight">{displayData.address}</p>
            </div>

        </div>
    )
}

const mapStateToProps = (state:IState) =>{
    return {
        displayData: state.data.filter((value)=>{
            if(value.id === state.contactId)
                return true;
            else return false;
        })[0] 
    }
}

const mapDispatchToProps = (dispatch:any)=>{
    const deleteDispatcher = (contactId:string) => dispatch(deleteContact(contactId))
    const displayEditFormDispatcher = (contactId:string) => dispatch(displayEditForm(contactId))

    return {
        deleteDispatcher: deleteDispatcher,
        displayEditForm: displayEditFormDispatcher
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactDisplay)
