import React, { createContext, useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'
import { MyContext } from './Context'

const Parent = () => {

    const [change, setChange] = useState('')
    return (
        <div style={{display:"flex",flexDirection:"column",alignItems:'center',padding:"50px"}}>
            <MyContext.Provider value={{ change, setChange }}>
                <ChildOne />
                <ChildTwo />
            </MyContext.Provider>
        </div>
    )
}

export default Parent