import React, { useContext } from 'react'
import { MyContext } from './Context'

const ChildOne = () => {

    const {setChange} = useContext(MyContext)
    const handleChange = (e) => {
        setChange(e.target.value)
    }
    return (
        <div>
            <input type="text" className='form-control' onChange={handleChange} />
        </div>
    )
}

export default ChildOne