import React from 'react'
import blog_icon from '../../res/blog-icon.png'
import {useDispatch} from 'react-redux'
import {displayEmpty, displayAddForm} from '../services/redux/contact.actions'

function Navigation() {

    const dispatch = useDispatch()

    return (
        <>
            <div className="navigation">

                <button id="home" onClick={() => dispatch(displayEmpty())}>HOME</button>
                <button id="add" onClick={()=> dispatch(displayAddForm())}>+ADD</button>

                <img src={blog_icon} alt="Blog Icon" />
            </div>
                <h4 id="heading">CONTACTS</h4>
        </>
    )
}

export default Navigation
