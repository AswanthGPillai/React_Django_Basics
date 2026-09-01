import React from 'react'

const Student = (props) => {
    return (
        <div>
            <h1><u>Student Details</u></h1>
            <h3>{props.name}</h3>
            <h3>{props.age}</h3>
            <h3>{props.course}</h3>
            <h3>{props.true}</h3>
        </div>
    )
}

export default Student