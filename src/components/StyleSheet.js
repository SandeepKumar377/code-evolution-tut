import React from "react";
import './myStyle.css'

const StyleSheet = (props) => {

    let styleName = props.primary ? "primary" : ""

    return (
        <div>
            <div className={`${styleName} xl-font`}>
                <h1>Hello</h1>
            </div>
            <div className={`${styleName} xxl-font`}>
                <h1>Hello</h1>
            </div>
            <div className={`${styleName} xxxl-font`}>
                <h1>Hello</h1>
            </div>
        </div>
    )
}
export default StyleSheet