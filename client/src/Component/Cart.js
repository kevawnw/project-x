import React from 'react'
import {useEffect, useState} from 'react'
import CartItem from './CartItem'
import '../Style/Cartitem.css'
import { useNavigate } from "react-router-dom"


function Cart({user}) {
  let navigate = useNavigate()

  const [cartitem, setCartItem] = useState([])
  const [cartEffect, setCartEffect] = useState(true)

   useEffect(()=> {
     fetch("/cart")
     .then(res => res.json())
     .then(data => setCartItem(data))
   },[cartEffect])

   function setlist(){
     let name =  prompt("Please name Shopping List")
     fetch('/shopping_lists',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({user_id: user.id, name: name})
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
    <div className= 'cart-backg'>
      <div className= {cartitem?.length? 'cart-container' : null}>
      {cartitem?.length? mappedItem : <h1 className= 'navigate' onClick={()=> navigate('/Start_Shopping')}>Click here to start finding items</h1>}
      {cartitem?.length? <button className= 'make-list-button' onClick={setlist}>Create Shopping List</button>: null}
      </div>
    </div>
  )
}

export default Cart