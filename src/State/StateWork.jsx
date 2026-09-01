import React from 'react'

const StateWork = () => {

    const students = [
        { id: 1, name: "Harini", age: 20, course: "BCA", marks: 85 },
        { id: 2, name: "Hanu", age: 21, course: "BSc", marks: 72 },
        { id: 3, name: "Rahul", age: 19, course: "BCom", marks: 91 },
        { id: 4, name: "Meera", age: 22, course: "BCom", marks: 68 },
        { id: 4, name: "Kashmeera", age: 22, course: "BCA", marks: 48 },
        { id: 4, name: "Tharun", age: 22, course: "BCA", marks: 52 },
    ];

    return (
        <div className='container mt-5' style={{ height: "100vh" }}>
            <h1 className='mb-5'>Display All Students in cards</h1>
            <div className='d-flex gap-5'>
                {students.map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>

                                <li>Id :- {items.id}</li>
                                <li>Name :- {items.name}</li>
                                <li>Age :- {items.age}</li>
                                <li>Course :- {items.course}</li>
                                <li>Marks :- {items.marks}</li>

                            </ul>
                        </div>

                    </div>
                ))}
            </div>



            <h1 className='mt-5 mb-5'>Display only BCA students</h1>
            <div className='d-flex gap-5 mt-5'>
                {students.filter((items, index) => (items.course == "BCA")).map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>

                                <li>Id :- {items.id}</li>
                                <li>Name :- {items.name}</li>
                                <li>Age :- {items.age}</li>
                                <li>Course :- {items.course}</li>
                                <li>Marks :- {items.marks}</li>

                            </ul>
                        </div>

                    </div>
                ))}
            </div>


            <h1 className='mt-5 mb-5'>Display students whose marks are above 80</h1>
            <div className='d-flex gap-5 mt-5'>
                {students.filter((items, index) => (items.marks >= 80)).map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>

                                <li>Id :- {items.id}</li>
                                <li>Name :- {items.name}</li>
                                <li>Age :- {items.age}</li>
                                <li>Course :- {items.course}</li>
                                <li>Marks :- {items.marks}</li>

                            </ul>
                        </div>

                    </div>
                ))}
            </div>


            <h1 className='mt-5 mb-5'>Display Pass / Fail result for each student {"pass > 50 | Fails < 50"}</h1>
            <div className='d-flex gap-5 mt-5'>
                {students.map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>
                                <li>Name :- {items.name}</li>
                                <li>Marks :- {items.marks}</li>
                                <li>Status :- {items.marks > 50 ? "Pass" : "Fail"}</li>

                            </ul>
                        </div>

                    </div>
                ))}
            </div>


            <h1 className='mt-5 mb-5'>Sort the students by age in ascending order</h1>
            <div className='d-flex gap-5 mt-5'>
                {students.sort((a,b)=>a.age - b.age).map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>
                                <li>Name :- {items.name}</li>
                                <li>Age :- {items.age}</li>
                            </ul>
                        </div>

                    </div>
                ))}
            </div>


            <h1 className='mt-5 mb-5'>Display all student names in uppercase</h1>
            <div className='d-flex gap-5 mt-5 '>
                {students.map((items, index) => (
                    <div key={index} className='card container'>
                        <div className='card-body'>
                            <ul className='fs-4'>
                                <li>Name :- {items.name.toUpperCase()}</li>
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default StateWork