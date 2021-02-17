import IClient from './contact.interface'
import DisplayTypeEnum from './contactDisplay.enum'

interface IState{
    contactId: (string | undefined),
    displayType:DisplayTypeEnum,
    data:IClient[]
}

export default IState