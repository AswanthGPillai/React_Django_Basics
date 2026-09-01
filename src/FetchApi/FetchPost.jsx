import React, { useState } from 'react'

const FetchPost = () => {
    const [title, setTitle] = useState("");

    const handleSubmit = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    body: "Hello from React",
                    userId: 1,
                }),
            }
        );
        const data = await response.json();

        sessionStorage.setItem("post", JSON.stringify(data));

        console.log("Saved in sessionStorage:", data);
    };

    return (
        <div>
            <h2>POST + Session Storage</h2>
            
            <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}/>
            
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default FetchPost