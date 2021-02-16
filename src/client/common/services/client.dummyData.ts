import IContact from '../interfaces/contact.interface'
import {v4 as uuidV4} from 'uuid'

const dummyContactDataList:IContact[] =[
    {
        id: uuidV4(),
        name: 'Chandermani Arora',
        email: 'chandermani@technovert.com',
        mobile: '+91 7845120215',
        landline: '01234058490',
        website: 'https://www.technovert.com',
        address: "Madhuri Hills"
    },
    {
        id: uuidV4(),
        name: 'Sashi Pagadala',
        email: 'sashi@technovert.com',
        mobile: '+91 7845120215',
        landline: '01234058490',
        website: 'https://www.technovert.com',
        address: "Madhuri Hills"
    },
    {
        id: uuidV4(),
        name: 'Praveen Battula',
        email: 'praveen@technovert.com',
        mobile: '+91 7845120215',
        landline: '01234058490',
        website: 'https://www.technovert.com',
        address: "Madhuri Hills"
    },
    {
        id: uuidV4(),
        name: 'Vijay Yalamanchalli',
        email: 'vijay@technovert.com',
        mobile: '+91 7845120215',
        landline: '01234058490',
        website: 'https://www.technovert.com',
        address: "Madhuri Hills"
    },
]

export default dummyContactDataList