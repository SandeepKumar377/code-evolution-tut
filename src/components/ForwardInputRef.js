import React from 'react'

const ForwardInputRef = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref} />
        </div>
    )
})
export default ForwardInputRef
