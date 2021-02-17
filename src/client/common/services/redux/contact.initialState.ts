import IState from '../../interfaces/contact.state.interface'
import dummyListData from '../client.dummyData'
import DisplayTypeEnum from '../../interfaces/contactDisplay.enum'

const initialState:IState = {
    contactId: undefined,
    displayType: DisplayTypeEnum.Empty,
    data: dummyListData
}

export default initialState