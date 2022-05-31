import React from 'react'
import { useNavigate } from "react-router-dom"


function Profile({setUser}) {
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
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile