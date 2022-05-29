import React from 'react'
import {useEffect, useState} from 'react'
import ShoplistCard from './ShoplistCard'
import '../Style/Shoplist.css'

function Shoplist() {
const [lists, setLists] = useState([])
const [runEffect, setRunEffect] = useState(true)
  useEffect(()=> {
    fetch('/shopping_lists')
    .then(res => res.json())
    .then(data => setLists(data))
  },[runEffect])

  console.log(lists)

  // const mappedName = lists?.map(list => {
  //   return <ul><li>{list.name? list.name: "Give list a name"}</li></ul>
  // })

  const mappedName = lists?.map(list => {
    return <ShoplistCard list={list} setRunEffect={setRunEffect}/>
  })

 


  return (
    <>
    <div className='shop-list-container'>
     {mappedName}
    </div>
    </>
  )
}

export default Shoplist