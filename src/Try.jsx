import React, { useState } from 'react'
import TryChild from './TryChild'

const Try = () => {
    const [change, setChange] = useState('hi')

    return (
        <div>
            <TryChild change={change} setChange={setChange}/>
            <input type="text" value={change}/>
        </div>
    )
}

export default Try