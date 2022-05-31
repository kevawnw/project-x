import React from 'react'
import {useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import '../Style/ItemCard.css'

function StartShopping() {
    const defaultState = {product: '', simplefood: ''}


const [food, setFood] = useState(defaultState)
const [searchFood, setSearchFood] = useState('')
const [numOfResults, SetNumOfResults] = useState(25)




function findItem(){
  fetch(`https://api.spoonacular.com/food/search?apiKey=f3d7ffe93cf14b57951eb8e0821d8930&query=${searchFood}&number=${numOfResults}`)
  .then(res => res.json())
  .then(data => setFood({product:data.searchResults[1].results, simplefood: data.searchResults[5].results}))
  .catch(error => console.log(error))
}


console.log(food)


return (
    <>
    <div className="searchInput">
      <input  type='text' placeholder='search food here' onChange={(e) => setSearchFood(e.target.value)} value={searchFood} /><br/>
      <button onClick={findItem}>Search food</button>
      <select onChange={(e) => SetNumOfResults(e.target.value)}>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
      </select>
    </div>
    <div className='item-container'>
        {food.product.length !== 0 && searchFood? food.product.map(food => {
          return <ItemCard key={food.id} food={food} />
        }) : 
        <h1 className="searchingTitle">Start searching food</h1>}
    </div>
  </>
  )
}

export default StartShopping

// useEffect(() => {
//     if(searchFood.length === 0){
//         return null
//     }
//   fetch(`https://api.spoonacular.com/food/search?apiKey=f3d7ffe93cf14b57951eb8e0821d8930&query=${searchFood}&number=${numOfResults}`)
//   .then(res => res.json())
//   .then(data => setFood({product:data.searchResults[1].results, simplefood: data.searchResults[5].results}))
//   .catch(error => console.log(error))

//   return () => {console.log("cleanup")}
// },[searchFood, numOfResults])