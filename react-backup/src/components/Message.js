import React,{useState} from 'react'
const Message=()=>{
    let[msg,setMsg]=useState('Hello.....');
    return(
        <div>
            <h1>{msg}</h1>
            <button onClick={()=>{
                setMsg("gd mrng")
            }}>GM</button>
            <button onClick={()=>{
                setMsg("gd afternoon")
            }}>GA</button>
        </div>
    )
}
export default Message