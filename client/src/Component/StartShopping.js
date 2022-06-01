import React from 'react'
import {useEffect, useState} from 'react'
import ItemCard from './ItemCard'
import '../Style/ItemCard.css'
import '../Style/StartShopping.css'

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
  <div className='img-repeat'>
    <div className="searchInput">
      <input className="inputSearch" type='text' placeholder='search food here' onChange={(e) => setSearchFood(e.target.value)} value={searchFood} /><br />
      <button className='searchButton' onClick={findItem}>Search food</button>
      <select className='selc' onChange={(e) => SetNumOfResults(e.target.value)}>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={100}>100</option>
      </select>
    </div>
    <div className={food.product.length !== 0 && searchFood ? 'item-container' : null}>
      {food.product.length !== 0 && searchFood ? food.product.map(food => {
        return <ItemCard key={food.id} food={food} />
      }) :
        <h1 className="searchingTitle">Start searching for food</h1>
      }
    </div>
  </div>
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