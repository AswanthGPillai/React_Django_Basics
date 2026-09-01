import React, { useState } from 'react'

const SubCategory = () => {
    const[category,setCategory]=useState("");
    const[subcategory,setSubcategory]=useState("");
    const[addData,setAddData]=useState([])

    const handleSubmit = () => {
     const data={
            category:category,
            subcategory:subcategory
        }
        setAddData([...addData, data])
    }

  return (
    <div className='container mt-5'>
        <table border={3}>
            <tr>
                <td>Category</td>
                <td><select onChange={(e)=>setCategory(e.target.value)}>
                        <option value="Ernakulam">Ernakulam</option>
                        <option value="Idukki">Idukki</option>
                    </select></td>
            </tr>
            <tr>
                <td>Subcategory</td>
                <td><input type="text" onChange={(e)=>setSubcategory(e.target.value)}/></td>
            </tr>
            <tr colSpan={2}>
                <td><button onClick={handleSubmit}>Submit</button></td>
                <td><button>Cancel</button></td>
            </tr>
        </table>
        <table border={3} className='mt-5'>
           
             
            <tr>
                <td>SlNo</td>
                 <td>Category</td>
                  <td>SubCategory</td>
            </tr>
             { 
             data.map((item,index)=>( 
              <tr>
                <td>{index+1}</td>
                 <td>{item[0]}</td>
                  <td>{item[1]}</td>
            </tr>
           )) }
        </table>


    </div>
  )
}

export default SubCategory