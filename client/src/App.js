
import './App.css';
import { useState, useEffect } from 'react'
import LoginPage from './Component/LoginPage';
import About from './Component/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './Component/Navbar';
import StartShopping from './Component/StartShopping';
import Shoplist from './Component/Shoplist';
import Cart from './Component/Cart';


function App() {
  const [user, setUser] = useState(null)
  const [cart_num, setCartNum] = useState([])

  const [cartitem, setCartItem] = useState([])
  const [cartEffect, setCartEffect] = useState(true)



  useEffect(() => {
    fetch('/cart')
    .then(res => res.json())
    .then(data => setCartNum(data))
  },[cartEffect])
 


  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      if(data.error){
        setUser(null)
      }
      else {setUser(data)}
    })
  },[])


  

  

  
  return (
    <div>
      {user ?
        <>
          <Navbar setUser={setUser} cartNum={cart_num}/>
          <Routes>
            {/* <Route path='/' element={<Home user={user}/>} /> */}
            <Route path='/about' element={<About />} />
            <Route path='/' element={<StartShopping setCartEffect={setCartEffect}/>} />
            {/* <Route path='/profile' element={<Profile setUser={setUser}/>} /> */}
            <Route path='/cart' element={<Cart user={user} cartitem={cartitem} setCartItem={setCartItem} setCartEffect={setCartEffect} cartEffect={cartEffect}/>} />
            <Route path='/shoplist' element={<Shoplist />} />
          </Routes>
        </>
        :
        <LoginPage setUser={setUser} />}
    </div>
  );
}

export default App;





