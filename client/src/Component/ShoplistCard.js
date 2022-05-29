import React from 'react'
import {useState} from 'react'
import '../Style/Shoplist.css'

function ShoplistCard({list, setRunEffect}) {
    
    console.log('list', list)

    const mappeditems = list.shopping_list_items?.map(li => {
        return <p> {li.showitem.name} - Price: ${li.showitem.price} Store: {li.showitem.store} </p>
    }) 

    function set_Name(){
        fetch(`/shopping_lists/${list.id}`,{
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
    }
    // pause on this patch function

    function removeList(){
        fetch(`/shopping_lists/${list.id}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(() => setRunEffect(prev => !prev))
    }
   
  return (
      <div className='shop-list'>
          <details>
              <summary>
                  Name: {list.name ? list.name : 'Enter A Name'} -  Total Cost: ${list.total_amount}
              </summary> 
                {mappeditems}
          </details>
          <button onClick={removeList}>Delete</button>
          
      </div>
  )
}

export default ShoplistCard