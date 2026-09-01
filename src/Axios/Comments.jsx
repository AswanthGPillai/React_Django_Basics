import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Comments = () => {
    const [comments, setComments] = useState([])


    const fetchComments = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
            setComments(response.data)
            console.log(response.data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {

        fetchComments()

    }, [])

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Comments</h1>
            {comments.map((data) => (
                <div className='container mt-5 border' key={data.id}>
                    <p>{data.id} .</p>
                    <p> Name = {data.name}</p>
                    <p> Email = {data.email}</p>
                    <p>Body = {data.body}</p>
                </div>
            ))}
        </div>
    )
}

export default Comments