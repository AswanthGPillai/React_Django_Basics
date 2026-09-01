import React, { useState } from 'react'

const District = () => {

    const [district, setDistrict] = useState('')
    const [list, setList] = useState([])
    const [editId, setEditId] = useState(null)

    const handleSubmit = () => {
        if (editId == null) {
            setList([...list, district])
            setDistrict('')
            return
        }
        const editList = [...list]
        editList[editId] = district
        setList(editList)
        setEditId(null)







    }
    console.log(list);



    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i != index)
        setList(newList)
    }

    const handleEdit = (index) => {
        console.log(index);
        setEditId(index)
        // const Item = list.find((item, i) => index == i)
        const Item = list[index]
        console.log(Item);
        setDistrict(Item)
    }



    return (
        <div className='container d-flex justify-content-center align-items-center mt-5'>
            <div>
                <table border={1} cellPadding={10}>
                    <tbody>
                        <tr>
                            <td>District</td>
                            <td><input type="text" name="" id="" value={district} onChange={(e) => setDistrict(e.target.value)} /></td>
                        </tr>
                        <tr>
                            <td><button onClick={handleSubmit}>Submit</button></td>

                        </tr>
                    </tbody>
                </table>

                <table className='table mt-5' border={1} >
                    <tr>
                        <td>SlNo</td>
                        <td>District Name</td>
                        <td>Action</td>
                    </tr>

                    {
                        list.map((items, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{items}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                </table>
            </div>
        </div>
    )
}

export default District