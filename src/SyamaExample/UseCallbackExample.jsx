import React, { useCallback, useState } from 'react'

const ClickCounter = ({ onClick }) => {
   console.log('Render: ClickCounter')

   return <button onClick={onClick}>Click me</button>
}

const UseCallBackHook = () => {
   const [count, setCount] = useState(0)

   // Without useCallback:
   // const handleClick = () => {
   //   console.log('Button clicked!');
   //   setCount(count + 1);
   // };

   // With useCallback:
   const handleClick = useCallback(() => {
      console.log('Button clicked!')
      setCount(count + 1)
   }, [count]) // Dependency array: list of variables that should trigger function recreation when they change

   console.log('Render: App')

   return (
      <div>
         <h1>Click Count: {count}</h1>
         <ClickCounter onClick={handleClick} />
      </div>
   )
}

export default UseCallBackHook