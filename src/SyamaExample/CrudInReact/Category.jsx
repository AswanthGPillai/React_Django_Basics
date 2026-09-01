import React, { useState } from 'react'

const Category = () => {
    const [category, setCategory] = useState("")
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)

    const handleSave = () => {
        if (category.trim() === "")
            alert("please fill up")


        if (editIndex != null) {
            const editList = [...list];
            editList[editIndex] = category;
            setList(editList);
        }
        else {
            setList([...list, category])
            setCategory("")
        }
    }

    const handleDelete = (index) => {
        const newList = list.filter((item, i) => i !== index)
        setList(newList)
    }

    const handleEdit = (item, index) => {
        setCategory(item);
        setEditIndex(index);
        
    };

    const handleCancel = () => {
        setCategory("")
    }

    return (
        <div className="container d-flex justify-content-center mt-5">

            {/* Add Category */}
            <div>
                <table border={1}>
                    <tbody>
                        <tr>
                            <td>Category Name</td>
                            <td>
                                <input
                                    type="text"
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div>
                <table border={3} className="ms-lg-5">
                    <tbody>
                        <tr>
                            <td>No.</td>
                            <td>Category Name</td>
                            <td>Action</td>
                        </tr>

                        {list.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                    <button onClick={() => handleEdit(item, index)}>Edit</button>

                                    <button onClick={() => handleDelete(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Category