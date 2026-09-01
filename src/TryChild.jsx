import React from 'react'

const TryChild = (props) => {
    const change = props.change
    const setChange = props.setChange
  return (
    <div>   
        <input type="text" onChange={(e)=>setChange(e.target.value)}/>
        <h1>{change}</h1>
    </div>
  )
}

export default TryChild