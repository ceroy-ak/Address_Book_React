import initialState from '../../services/redux/contact.initialState'
import {DISPLAY_CONTACT,DISPLAY_ADD_FORM,EDIT_BTN_CALL,UPDATE_CONTACT, DISPLAY_EMPTY, DELETE_CONTACT,ADD_CONTACT} from '../../interfaces/contact.constants'
import IState from '../../interfaces/contact.state.interface'
import DisplayTypeEnum from '../../interfaces/contactDisplay.enum'
import IContact from '../../interfaces/contact.interface';

export default function reducer(state:IState=initialState!, action:any){
    let newState:IState;

    switch(action.type){
        case DISPLAY_CONTACT: 
            newState = {
                ...state,
                displayType: DisplayTypeEnum.SelectedContact,
                contactId: action.payload,
            }
        return newState;
        
        case DISPLAY_ADD_FORM: 
            newState = {
                ...state,
                contactId: undefined,
                displayType: DisplayTypeEnum.AddForm
            } 
        return newState

        case EDIT_BTN_CALL:
            newState = {
                ...state,
                contactId: action.payload,
                displayType: DisplayTypeEnum.EditForm,
            }
            return newState

        case UPDATE_CONTACT:
            const tempData:IContact =  action.payload  
            newState = {
                contactId:undefined,
                displayType: DisplayTypeEnum.Empty,
                data: state.data.map((value)=>{
                    if(value.id === tempData.id){
                        value.name = tempData.name;
                        value.email =tempData.email;
                        value.mobile = tempData.mobile;
                        value.landline = tempData.landline;
                        value.website = tempData.website;
                        value.address = tempData.address;
                    }
                    return value
                })
            }
            return newState

        case DISPLAY_EMPTY:
            newState = {
                ...state,
                contactId: undefined,
                displayType: DisplayTypeEnum.Empty
            } 
        return newState

        case DELETE_CONTACT:
            newState = {
                contactId: undefined,
                displayType: DisplayTypeEnum.Empty,
                data: state.data.filter((value)=>{
                    return (value.id !== action.payload)
                })
            }
        return newState
        
        case ADD_CONTACT:
            newState = {
                contactId: undefined,
                displayType: DisplayTypeEnum.Empty,
                data: [...state.data, action.payload]
            }
            return newState
        default: return state
    }
}