import {DISPLAY_CONTACT,DISPLAY_EMPTY, UPDATE_CONTACT, EDIT_BTN_CALL, DISPLAY_ADD_FORM ,DELETE_CONTACT, ADD_CONTACT} from '../../interfaces/contact.constants'
import IContact from '../../interfaces/contact.interface'

export function displaySelectedContact(contactId:string){
    return {
        type: DISPLAY_CONTACT,
        payload: contactId
    }
}

export function displayEmpty(){
    return {
        type: DISPLAY_EMPTY
    }
}

export function displayAddForm(){
    return {
        type: DISPLAY_ADD_FORM
    }
}

export function deleteContact(contactId:string){
    return {
        type: DELETE_CONTACT,
        payload: contactId
    }
}

export function addContact(value:IContact){
    return {
        type: ADD_CONTACT,
        payload: value
    }
}

export function displayEditForm(contactId:string){
    return {
        type: EDIT_BTN_CALL,
        payload: contactId
    }
}

export function updateContact(contact:IContact){
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}