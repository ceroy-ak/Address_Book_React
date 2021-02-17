import React from 'react'
import Title from './title.component'
import Navigation from './navigation.component'
import ContactDisplay from '../../components/contact/contact.display.component'
import ContactList from '../../components/contact/contact.list.component'
import ContactDataForm from '../../components/contact/contact.form.component'
import DisplayTypeEnum from '../../common/interfaces/contactDisplay.enum'
import {connect } from 'react-redux'
import IState from '../interfaces/contact.state.interface'


interface IAppProp{
    contactId: (string|undefined)
    displayType: DisplayTypeEnum
}
function App({contactId, displayType}:IAppProp) {

    function displayTypeMethod(type: DisplayTypeEnum, id: (string | undefined) = undefined): JSX.Element {
        if (type === DisplayTypeEnum.Empty) {
            return <></>
        } else if (type === DisplayTypeEnum.SelectedContact) {
            if (id === undefined) {
                return <h1>Something Went Wrong</h1>
            } else {
                return <ContactDisplay />
            }
        } else if (type === DisplayTypeEnum.EditForm) {
            if (id === undefined) {
                return <h1>Something Went Wrong</h1>
            } else {
                return <ContactDataForm contactId={id} />
            }
        } else if (type === DisplayTypeEnum.AddForm) {
            return <ContactDataForm contactId={contactId} />
        }
        else {
            return <h1>Something Went Wrong</h1>
        }
    }

    return (
        <>
            <header>
                <Title />
                <Navigation />
            </header>
            <main>
                    <ContactList />
                    {displayTypeMethod(displayType, contactId)}
            </main>
        </>
    )
}

const mapStateToProp = (state:IState) =>(
    {
        contactId: state.contactId,
        displayType: state.displayType
    }
)

export default connect(mapStateToProp)(App)
