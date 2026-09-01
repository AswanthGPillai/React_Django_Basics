import React, { useState } from 'react'

const Search = () =>  {
    const [search, setSearch] = useState('')


    const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

    const result = items.filter((data) => data.toLowerCase().startsWith(search.trim().toLowerCase()))

    return (
        <div>
            <h2>Search</h2>
            <input type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />

            <ol>
                {result.map((data, index) => (
                    <li key={index}>{data}</li>
                ))}
            </ol>
        </div>
    )
}

export default Search