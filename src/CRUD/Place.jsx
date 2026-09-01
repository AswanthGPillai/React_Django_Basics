import React, { useState } from 'react'

const Place = () => {

    const [place, setPlace] = useState('')
    const [district, setDistrict] = useState('')
    const [store, useStore] = useState([])

    const handleSubmit = () => {
        
        const data = {
            district: district,
            place: place
        }

        useStore([...store, data])
        setPlace('')
    }

    const handleReset = () => {
        setDistrict('')
        setPlace('')
    }

    return (
        <div className='container mt-5'>

            <table border={2}>
                <tbody>
                    <tr>
                        <td>District</td>
                        <td>
                            <select
                                className='w-100'
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                            >
                                <option value="" disable selected>-- Select --</option>
                                <option value="Ernakulam">Ernakulam</option>
                                <option value="Kottayam">Kottayam</option>
                                <option value="Alappuzha">Alappuzha</option>
                            </select>
                        </td>
                    </tr>

                    <tr>
                        <td>Place</td>
                        <td>
                            <input
                                type="text"
                                className='w-100'
                                value={place}
                                onChange={(e) => setPlace(e.target.value)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan={2} align='center'>
                            <button onClick={handleSubmit}>Submit</button>
                            <button onClick={handleReset}>Reset</button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table border={2} className='mt-4'>
                <thead>
                    <tr>
                        <th>District</th>
                        <th>Place</th>
                    </tr>
                </thead>

                <tbody>
                    {store.map((item, index) => (
                        <tr key={index}>
                            <td>{item.district}</td>
                            <td>{item.place}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Place