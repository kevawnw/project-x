import React from 'react'

function SLModal({list, setModal}) {
    console.log(list)
    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    const mappeditems = list.shopping_list_items?.map(li => {
        return <ul> <li><p>{li.showitem.name}</p>  <p>Price: {dollarUS.format(li.showitem.price)}</p> <p>Quantity: {li.showitem.quantity}</p> <p>Store: {li.showitem.store}</p></li> </ul>
    }) 

  return (
      <div className= 'modal-shoplist-content'>
          <span className='close-button' onClick={()=> setModal(true)}>X</span>
          {mappeditems}
      </div>
  )
}

export default SLModal