import React from 'react'
import {useEffect, useState} from 'react'
import CartItem from './CartItem'

function Cart({user}) {
  console.log(user)

  const [cartitem, setCartItem] = useState([])
  const [cartEffect, setCartEffect] = useState(true)

   useEffect(()=> {
     fetch("/cart")
     .then(res => res.json())
     .then(data => setCartItem(data))
   },[cartEffect])

   function setlist(){
     fetch('/shopping_lists',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({user_id: user.id})
     })
     .then(res => res.json())
     .then(data => {
       fetch('/set_list', {
         method: 'POST',
         headers:{
          'Content-Type': 'application/json'
         },
         body: JSON.stringify({shopping_list_id: data.id})
       })
       .then(res => res.json())
       .then(() => setCartEffect(prev => !prev))
     })
   }

   console.log(cartitem)

   const mappedItem = cartitem?.map(item => {
     return <CartItem key={item.id} item={item} setCartEffect={setCartEffect}/>
   })


   console.log(mappedItem)

  return (
    <div>
      {mappedItem}
      <button onClick={setlist}>Create Shopping List</button>
    </div>
  )
}

export default Cart