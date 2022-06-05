import React from 'react'
import { Link } from "react-router-dom"
import '../Style/Navbar.css'
import { TbLogout } from 'react-icons/tb'
import { useNavigate } from "react-router-dom"
import  bag from '../Image/shopping-bag.png'
import {TiShoppingCart} from 'react-icons/ti'


function Navbar({setUser, cartNum}) {
  

 

  let navigate = useNavigate()
 
   async function logout(){
     await fetch('/logout', {
        method: "DELETE"
      })
      .then(res => res.json())
      .then(() => setUser(null))
       navigate('/')
    }
  
  return (
    <div>
      <nav className='navbar'>
        <img className='logo' src={bag} />
        <div className='nav-menu'>
           {/* <Link  to='/'>Home</Link> */}
          <Link to='/about'>About</Link>
           <Link to='/'>StartShopping</Link>
          {/* <Link to='/profile'>Profile</Link> */}
          <Link to='/cart'><div ><TiShoppingCart size={20}/><span className='cart-icon'>{cartNum.length}</span></div></Link>
          <Link to='/shoplist'>ShoppingList</Link>
          <button className = 'header-faker' onClick={logout}><TbLogout size={20}/></button>
        </div>
      </nav>

    </div>
  )
}

export default Navbar