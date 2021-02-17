import React from 'react'
import { useForm } from 'react-hook-form'
import IContact from '../../common/interfaces/contact.interface'
import { v4 as uuidV4 } from 'uuid'
import {useDispatch, useSelector} from 'react-redux'
import {displayEmpty, addContact, updateContact} from '../../common/services/redux/contact.actions'
import IState from '../../common/interfaces/contact.state.interface'


interface IContactDataFormProp{
    contactId: (string|undefined)
}

function ContactDataForm({contactId}:IContactDataFormProp) {

    //Interface for the Form
    interface IContactForm {
        name: string,
        email: string,
        mobile: string,
        landline: string,
        website: string,
        address: string
    }

    //The actionType and its enum defines which type of action is happening with this form
    enum ActionEnum { Add, Update };
    const actionType = (contactId === undefined) ? ActionEnum.Add : ActionEnum.Update;

    //Defaultvalue initialized
    let defaultValues: IContact = {
        id: uuidV4(),
        address: "",
        email: "",
        landline: "",
        mobile: "",
        name: "",
        website: ""
    }

    //Get the state using useSelector
    const oldData = useSelector((state:IState)=>state.data)
    //If operation is Update then fill in the default value
    if(actionType === ActionEnum.Update){
        defaultValues = oldData.filter((value)=> value.id === contactId)[0]
    }

    //useForm hook from react-hook-form
    const { register, handleSubmit, errors } = useForm<IContactForm>({
        mode: "onChange",
        defaultValues: {
            name: defaultValues.name,
            address: defaultValues.address,
            email: defaultValues.email,
            landline: defaultValues.landline,
            mobile: defaultValues.mobile,
            website: defaultValues.website,
        }
    });

    //React Redux hook to dispatch actions
    const dispatch = useDispatch()

    //When Cancel Button is clicked 
    const cancelBtn = () => {
        dispatch(displayEmpty())
    }

    //On Submit of the form
    function onSubmit(data: IContactForm) {
        
        
        const temp:IContact = {
            id: defaultValues.id,
            address: data.address,
            email: data.email,
            landline: data.landline,
            mobile: data.mobile,
            name: data.name,
            website: data.website
        }
        
        //If operation is update then the defaultvalues will change
        if (actionType === ActionEnum.Update) {
            dispatch(updateContact(temp))

        }else if(actionType === ActionEnum.Add){
            dispatch(addContact(temp))
        }else{
            alert('Something Went Wrong')
        }
    }

    return (
        <div>
            <form id="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                {/*Form Name Field */}
                <label htmlFor="formName">Name</label>
                <input type="text" ref={register({
                    required: true,
                    pattern: /^[a-zA-Z\s]+$/,

                })} name="name" id="formName" required onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} />
                {errors.name && <small id="formNameError">Names can only contain alphabets</small>}

                {/*Form Email Field */}
                <label htmlFor="formEmail">Email</label>
                <input type="email" name="email" id="formEmail" ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}/,

                })} onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} required />
                {errors.email && <small id="formEmailError">Enter valid email id</small>}

                {/*Form Mobile and Landline Container */}
                <div className="form-row">
                    <div className="form-col-mob">

                        {/*Form Mobile Field */}
                        <label id="formMobileLabel" htmlFor="formMobile">Mobile</label>
                        <input type="tel" name="mobile" ref={register({
                            required: true,
                            pattern: /^[+][0-9]{1,3}[- 0-9]{4,13}$/,

                        })} id="formMobile" required onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} />
                        {errors.mobile && <small id="formMobileError">can accept only +countryCode phoneNumber</small>}

                    </div>
                    <div className="form-col-landline">

                        {/*Form Landline Field */}
                        <label id="formLandlineLabel" htmlFor="formLandline">Landline</label>
                        <input type="tel" name="landline" ref={register} id="formLandline" required onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} />


                    </div>
                </div>

                {/*Form Website Field */}
                <label htmlFor="formWebsite">Website</label>
                <input type="url" name="website" ref={register({
                    required: true,
                    pattern: /^(https|http):\/\/[a-zA-Z0-9]+\.[a-zA-Z0-9]+\.[a-zA-Z]+$/,

                })} id="formWebsite" required onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => { e.key === 'Enter' && e.preventDefault(); }} />
                {errors.website && <small id="formWebsiteError">Enter valid url eg. https://www.google.com</small>}

                {/*Form Address Field */}
                <label htmlFor="formAddress">Address</label>
                <textarea name="address" id="formAddress" ref={register} cols={83} rows={20} />

                {/*Form Buttons Field */}
                <button type="button" id="formCancelBtn" onClick={cancelBtn}>Cancel</button>
                <button type="submit" id="formSubmitBtn">{(actionType===ActionEnum.Add)?"Add":"Update"}</button>
            </form>
        </div>
    )
}

export default ContactDataForm
