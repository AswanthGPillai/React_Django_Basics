import React, { useState } from 'react'

const App = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target); // 1. Pass e.target
    console.log(data);

    console.log(Object.fromEntries(data)); // 2. Convert to plain object to log cleanly

    setDetails(Object.fromEntries(data))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <table border={1} align="center">
          <tbody>
            <tr>
              <td>Name</td>
              <td><input type="text" name="name" /></td> {/* 3. Added name attribute */}
            </tr>
            <tr>
              <td>Email</td>
              <td><input type="email" name="email" /></td> {/* Added name attribute */}
            </tr>
            <tr>
              <td>Password</td>
              <td><input type="password" name="password" /></td> {/* Added name attribute */}
            </tr>
            <tr>
              <td colSpan={2} align="center">
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <br /><br /><br /><br />

      {details.name!="" && (
        <table border={1} align='center'>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{details.name}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{details.email}</td>
            </tr>
            <tr>
              <td>Password</td>
              <td>{details.password}</td>
            </tr>
          </tbody>
        </table>
      )}

    </div>
  )
}

export default App