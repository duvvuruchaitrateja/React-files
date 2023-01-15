import React from "react";
const Message=()=>{
    let msg="Hello"
    let gmHandler =()=>{
        msg="GM"
    }
    let gnHandler =()=>{
        msg="GN"
    }
    return(
        <div>
            <h1>msg</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </div>

    )

}
export default Message