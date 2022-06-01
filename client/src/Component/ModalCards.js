import React from 'react'
import '../Style/ItemCard.css'
import {useState} from 'react'

function ModalCards({item}) {

  const [disbutton, setDisbutton] = useState(true)

    function addToCart(){
        fetch('/items',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({name: item.name, price: item.price, store: item.store })
        })
        .then(res => res.json())
        .then(data => {
            fetch('/shopping_list_items',{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({item_id: data.id})
              })
              .then(res => res.json())
              .then(console.log)
        })
        setDisbutton(false)
      }

  return (
    <>
    {item.name && item.price !==0 ?   
    <div className = 'modal-content'>
      <div className='content'>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <p>Store: {item.store}</p>
        {disbutton? <button onClick={addToCart}>Add to Cart</button>: <button disabled>Added to cart</button> }
        
      </div>
    </div>
    : 
    null}
  
    </>
  )
}

export default ModalCards