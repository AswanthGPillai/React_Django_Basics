import React, { useState } from 'react'

const State = () => {

    const [name, setName] = useState("Gokul")
    const [userName, setUserName] = useState('User Name')
    const fruits = ["Apple", "Banana", "Grapes", "Mango"]

    const students = [
        {
            name: "Max",
            age: 20
        },
        {
            name: "James",
            age: 22
        },
        {
            name: "Alan",
            age: 21
        }
    ]


    const emp = "Ram"

    let user = "Hari"
    const change = () => {
        user = "Vishnu"
        setName("Jishnu")
        console.log(user);
    }


    const displayName = () => {
        if (userName == "" || userName =="User Name") {
            alert("Enter Your Name in Input field")
        } else {
            alert(`Your Name : ${userName}`)
        }

    }



    return (
        <div className='container m-5'>
            <div>
                <h3>Our New Employee is : {emp}</h3>
                <h3>Our New Employee is : {user}</h3>
                <h3>Our New Employee is : {name}</h3>
                <button onClick={change}>Click</button>

                <input type="text" className='form-control mt-5' placeholder='Enter Your Name' onChange={(e) => setUserName(e.target.value)} />
                <h2>Your Name : {userName}</h2>

                <button className='btn btn-success' onClick={displayName}>Display</button>
            </div>
            <br /><br />
            <div className='d-flex flex-column align-items-center'>
                <h2>Fruits List :</h2>
                <ol type='i'>
                    {fruits.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>

            <div>
                <h1>Students List :</h1>
                {students.map((item, index) => (
                    <div key={index}>
                        <p>Name : {item.name}</p>
                        <p>Age : {item.age}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default State