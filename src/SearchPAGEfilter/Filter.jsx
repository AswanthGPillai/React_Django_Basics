import React, { useState } from 'react'

const Filter = () => {
    const [category, setCategory] = useState('All');

    function alerts() {
        alert("Aswanth...")

    }

    const items = [
        { name: 'Apple', category: 'Fruits' },
        { name: 'Banana', category: 'Fruits' },
        { name: 'Mango', category: 'Fruits' },

        { name: 'Carrot', category: 'Vegetables' },
        { name: 'Potato', category: 'Vegetables' },
        { name: 'Tomato', category: 'Vegetables' },

        { name: 'Laptop', category: 'Electronics' },
        { name: 'Mobile', category: 'Electronics' },
        { name: 'Headphones', category: 'Electronics' }

    ];

    const filterItems = category == 'All' ? items : items.filter((items) => items.category == category)

    return (
        <div>
            <div>
                <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetables">Vegetables</option>
                </select>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <button onClick={() => setCategory('All')}>All</button>&nbsp;&nbsp;
                <button onClick={() => setCategory('Fruits')}>Fruits</button>&nbsp;&nbsp;
                <button onClick={() => setCategory('Vegetables')}>Vegetables</button>&nbsp;&nbsp;
                <button onClick={() => setCategory('Electronics')}>Electronics</button>&nbsp;&nbsp;
            </div>

            <ol type='1'>
                {filterItems.map((data, index) => (
                    <li key={index}>{data.name}</li>
                ))}
            </ol>
        </div>
    )
}

export default Filter