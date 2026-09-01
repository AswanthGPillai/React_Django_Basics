import React, { useMemo, useState } from 'react'

const UseMemoExample = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const counter = useMemo(() => {

        console.log("Calculating...")

    }, [count])

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => (setCount(count + 1))}>Counter</button>
            <input type="text" onChange={(e) => (setText(e.target.value))} />
        </div>
    )
}

export default UseMemoExample