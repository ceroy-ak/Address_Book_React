import React from 'react'
import Title from './title.component'
import Navigation from './navigation.component'
import ContactDisplay from '../../components/contact/contact.display.component'
import ContactList from '../../components/contact/contact.list.component'
import ContactDataForm from '../../components/contact/contact.form.component'
import DisplayTypeEnum from '../../common/interfaces/contactDisplay.enum'

function App() {

    
    let contactId:(string | undefined) = undefined
    let displayType:DisplayTypeEnum = DisplayTypeEnum.Empty


    function displayTypeMethod(type:DisplayTypeEnum, id:(string|undefined)=undefined):JSX.Element{
        if(type === DisplayTypeEnum.Empty){
            return <></>
        }else if(type === DisplayTypeEnum.SelectedContact){
            if(id === undefined){
                return <h1>Something Went Wrong</h1>
            }else{
                return <ContactDisplay />
            }
        }else if(type === DisplayTypeEnum.EditForm){
            if(id === undefined){
                return <h1>Something Went Wrong</h1>
            }else{
                return <ContactDataForm contactId={id}/>
            }
        }else if(type === DisplayTypeEnum.AddForm){
            return <ContactDataForm contactId={undefined}/>
        }
        else{
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

export default App
