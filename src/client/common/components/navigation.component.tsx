import React from 'react'
import blog_icon from '../../res/blog-icon.png'

function Navigation() {
    return (
        <>
            <div className="navigation">

                <button id="home">HOME</button>
                <button id="add">+ADD</button>

                <img src={blog_icon} alt="Blog Icon" />
            </div>
                <h4 id="heading">CONTACTS</h4>
        </>
    )
}

export default Navigation
