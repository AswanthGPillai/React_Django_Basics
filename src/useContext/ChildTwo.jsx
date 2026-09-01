import React, { useContext } from 'react'
import { MyContext } from './Context'

const ChildTwo = () => {
    const { change } = useContext(MyContext)
    return (
        <div>
            <h1>{change}</h1>
        </div>
    )
}

export default ChildTwo