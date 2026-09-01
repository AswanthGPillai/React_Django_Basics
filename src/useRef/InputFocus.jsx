import React, { useRef } from 'react'

const InputFocus = () => {

    const inputRef = useRef(null)

    const inputFocus = () =>{
        inputRef.current.focus()
    }

    const getValue = () =>{
        if(inputRef.current.value == ""){
            alert('Input a Value')
            return
        }
        const value = inputRef.current.value
        alert(`Value get from DOM : -  ${value}`)
    }

  return (
    <div>
        <div className='container d-flex justify-content-center mt-5'>
            <input type="text" className='form-control p-3' placeholder='Type Anything' ref={inputRef}/>
        </div>
        <div className='container mt-5 d-flex gap-5 w-100'>
            <button className='btn btn-success'  onClick={inputFocus}>Click to Focus</button>
            <button className='btn btn-primary' onClick={getValue}>Get input Value</button>
        </div>
    </div>
  )
}

export default InputFocus


