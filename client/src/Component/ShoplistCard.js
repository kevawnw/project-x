import React from 'react'
import {useState} from 'react'

function ShoplistCard({list}) {
    console.log('list', list)

    const mappeditems = list.shopping_list_items?.map(li => {
        return <p> {li.showitem.name}: ${li.showitem.price} Store: {li.showitem.store} </p>
    }) 

    function setName(){
        fetch(`/shopping_lists/${list.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
    }
   
  return (
      <div>
          <details>
              <summary>
                  {list.name ? list.name : 'Enter A Name'}
              </summary>
              
                {mappeditems}
              
              
          </details>
      </div>
  )
}

export default ShoplistCard