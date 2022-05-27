import React from 'react'
import {useEffect, useState} from 'react'
import ShoplistCard from './ShoplistCard'

function Shoplist() {
const [lists, setLists] = useState([])
  useEffect(()=> {
    fetch('/shopping_lists')
    .then(res => res.json())
    .then(data => setLists(data))
  },[])

  console.log(lists)

  // const mappedName = lists?.map(list => {
  //   return <ul><li>{list.name? list.name: "Give list a name"}</li></ul>
  // })

  const mappedName = lists?.map(list => {
    return <ShoplistCard list={list}/>
  })

 


  return (
    <>
    <div>
     {mappedName}
    </div>
    </>
  )
}

export default Shoplist