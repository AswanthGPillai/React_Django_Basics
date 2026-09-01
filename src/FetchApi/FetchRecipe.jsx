import React, { useEffect, useState } from 'react'

const FetchRecipe = () => {

  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState('')
  const [cuisine, setCuisine] = useState('All')

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then((res) => res.json())
      .then((data) => setRecipe(data.recipes))
      .catch((err) => console.log(err))
  }, [])

  const filteredItem = recipe.filter((item) => item.name.toLowerCase().startsWith(search.toLowerCase()))
  console.log(filteredItem);

  const Items = cuisine == 'All' ? filteredItem : filteredItem.filter((items) => items.cuisine.toLowerCase() == cuisine.toLowerCase())


  return (
    <div>
      {/* Header */}
      <header className="bg-white border-bottom shadow-sm">
        <div className="container py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="fw-bold text-primary mb-0">
              RecipeBook
            </h4>

            <div className="d-flex gap-4">
              <a href="#" className="text-dark text-decoration-none">
                Home
              </a>
              <a href="#" className="text-dark text-decoration-none">
                Recipes
              </a>
              <a href="#" className="text-dark text-decoration-none">
                About
              </a>
            </div>
          </div>
        </div>
      </header>


      <div className='d-flex container'>
        <div className=' w-100 d-flex justify-content-center h-25 mt-5'>
          <input type="text" placeholder='Search Recipe Name' className='form-control w-50' onChange={(e) => setSearch(e.target.value)} />
        </div>

        <div className=' w-100 d-flex justify-content-center h-25 mt-5'>
          <label htmlFor="" className='fs-5 me-3 opacity-75 d-flex justify-content-center align-items-center'>Filter By Cuisine</label>
          <select name="" id="" onChange={(e) => setCuisine(e.target.value)} className='form-select' style={{ width: "150px" }}>
            <option value="All">All</option>
            <option value="Italian">Italian</option>
            <option value="Asian">Asian</option>
            <option value="American">American</option>
            <option value="Mexican">Mexican</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Pakistani">Pakistani</option>
            <option value="Japanese">Japanese</option>
            <option value="Moroccan">Moroccan</option>
            <option value="Korean">Korean</option>
            <option value="Greek">Greek</option>
            <option value="Thai">Thai</option>
            <option value="Indian">Indian</option>
            <option value="Turkish">Turkish</option>
            <option value="Smoothie">Smoothie</option>
            <option value="Lebanese">Lebanese</option>
            <option value="Brazilian">Brazilian</option>

          </select>
        </div>
      </div>




      {Items.map((data) => (
        <div className="container my-5 " key={data.id}>
          {/* Back Button & Title Header */}
          <div className="row align-items-center mb-4">
            <div className="col-md-4">
              {/* <button className="btn btn-outline-primary btn-sm px-3">
                Back to Recipes List
              </button> */}
            </div>
            <div className="col-md-8 text-center text-md-start">
              <h1 className="fw-bold display-5 mb-0">{data.name}</h1>
            </div>
          </div>

          <div className="row g-5">
            {/* Left Column: Main Image & Action Buttons */}
            <div className="col-lg-6">
              <div className="rounded overflow-hidden mb-4">
                <img
                  src={data.image}
                  alt="Caprese Salad"
                  className="img-fluid w-100"
                  style={{ objectFit: "cover", maxHeight: "500px" }}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <button onClick={() => { alert(`Downloaded ${data.name} Recipe`) }} className="btn btn-outline-success btn-sm px-3">
                  Download the recipe
                </button>
                <button onClick={() => { alert(`Saved ${data.name} Recipe Details`) }} className="btn btn-outline-primary btn-sm px-3">
                  Save Recipe
                </button>
              </div>
            </div>

            {/* Right Column: Key Details, Stats, Ingredients, Instructions */}
            <div className="col-lg-6">
              {/* Metadata Row */}
              <div className="row text-center text-md-start mb-4 fs-6">
                <div className="col-4">
                  <span className="fw-bold">Cuisine : </span>
                  <span>{data.cuisine}</span>
                </div>
                <div className="col-4">
                  <span className="fw-bold">Servings: </span>
                  <span>{data.servings}</span>
                </div>
                <div className="col-4">
                  <span className="fw-bold">Mode of Cooking: </span>
                  <span>{data.difficulty}</span>
                </div>
              </div>

              {/* Cooking Stats Row */}
              <div className="row text-center mb-4">
                <div className="col-4">
                  <div className="mb-1 fs-3">⏱️</div>
                  <div className="fw-bold small">Preparation Time</div>
                  <div className="text-muted small">{data.prepTimeMinutes} Minutes</div>
                </div>
                <div className="col-4">
                  <div className="mb-1 fs-3">🥘</div>
                  <div className="fw-bold small">Cooking Time</div>
                  <div className="text-muted small">{data.cookTimeMinutes} Minutes</div>
                </div>
                <div className="col-4">
                  <div className="mb-1 fs-3">🍲</div>
                  <div className="fw-bold small">Calories Per Servings Time</div>
                  <div className="text-muted small">{data.caloriesPerServing}</div>
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="mb-4">
                <h3 className="fw-bold mb-3">Ingredients Needed</h3>
                <ol className="ps-3 mb-0 text-secondary" style={{ lineHeight: "1.8" }}>
                  {data.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ol>
              </div>

              {/* Instructions Section */}
              <div>
                <h3 className="fw-bold mb-3">Cooking Instructions</h3>
                <ol className="ps-3 mb-0 text-secondary" style={{ lineHeight: "1.8" }}>
                  {data.instructions.map((instructions, index) => (
                    <li key={index}>{instructions}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default FetchRecipe