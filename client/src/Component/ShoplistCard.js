import React from 'react'
import {useState} from 'react'
import '../Style/Shoplist.css'

function ShoplistCard({list, setRunEffect}) {
    
    console.log('list', list)

    const mappeditems = list.shopping_list_items?.map(li => {
        return <ul> <li><p>{li.showitem.name}</p>  <p> ${li.showitem.price}</p> <p>Store: {li.showitem.store}</p></li> </ul>
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
                  Name: {list.name ? list.name : 'Enter A Name...'} -  Total Cost: ${list.total_amount}
              </summary> 
                {mappeditems}
          </details>
          <button className="deleteButton" onClick={removeList}>Delete</button><br/>
      </div>
  )
}

export default ShoplistCard