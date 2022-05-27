import React from 'react'


function Profile({setUser}) {
  
  function logout(){
    fetch('/logout', {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => setUser(null))
  }



  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile