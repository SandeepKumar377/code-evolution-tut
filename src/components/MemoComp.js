import React from "react"


const MemoComp = ({name}) => {
    console.log("rendering Memo Comp")
    return (
        <div>
            {name}
        </div>
    )
}


export default React.memo(MemoComp)
