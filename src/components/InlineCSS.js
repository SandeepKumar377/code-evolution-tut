import React from 'react'

const objectStyle={
    fontSize:'100px',
    color:'red'
}

const InlineCSS = () => {
    return (
        <div>
             <h1 className='error'>From inline Message</h1>
            <h1 style={objectStyle}>Sandeep</h1>
        </div>
    )
}

export default InlineCSS