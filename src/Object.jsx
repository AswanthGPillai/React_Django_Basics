import React, { useState } from 'react'

const Object = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [data, setData] = useState({})


    const handleSubmit = () => {
        setData({
            name: name,
            email: email
        })
    }


    return (
        <div>
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
                        {data.name && (
                            <tbody >


                                <tr>
                                    <td>Name</td>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{data.email}</td>
                                </tr>

                            </tbody>
                        )}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Object