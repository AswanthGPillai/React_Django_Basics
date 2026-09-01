import React, { useState } from 'react'
import New from './New'
import Props from './Props'


const Work = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState([])

    const handleSubmit = () => {
        setData([[name,email]])


    }
    console.log(data);


    return (
        <div>
            <table border={1} cellPadding={10} align='center'>
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="text" onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><button onClick={handleSubmit}>submit</button></td>
                    </tr>
                </tbody>
            </table>

            <div>


                <table >
                    <thead>

                    </thead>
                    {data.map((item, index) => (
                        <tbody key={index}>

                            <tr>
                                <td>Name</td>
                                <td>{item[0]}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{item[1]}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

            <Props />
        </div>

        
    )

    
}




export default Work