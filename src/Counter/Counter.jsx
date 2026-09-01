import React, { useEffect, useState } from 'react'

const Counter = () => {


    const [count, setCount] = useState(0)

    const Counter = () => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }

    useEffect(() => {
        Counter()
    })

    return (
        <div className='container bg-warning opacity-50  p-5 mt-5 d-flex justify-content-center' >

            <h2>Counter : {count}</h2>
        </div>
    )
}

export default Counter