import React from 'react'

function CartItem({item, setCartEffect}) {

  
  console.log(item.id)

let quantity = []
for(let i = 1; i < 11; i++){
  quantity.push(<option key={i} value={i}>{i}</option>)
} 

function setQuantity(e){
  fetch(`/items/${item.item.id}`, {
    method: 'PATCH',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({quantity: e.target.value})
  })
  .then(res => res.json())
  .then(data => setCartEffect(prev => !prev))

}
   
  return (
    <div>
        <p>Name: {item.item.name}</p>
        <p>Price: ${item.item.price} per item</p>
        <p>Quantity: {item.item.quantity} <select onChange={setQuantity}><option value= 'none' selected disabled hidden>Select a option</option>{quantity}</select></p>
        <p>Store: {item.showitem.store}</p>
        <p>Total Cost: ${item.item.total_cost}</p><br/>
    </div>
  )
}

export default CartItem