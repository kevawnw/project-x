import React from 'react'
import {useState} from 'react'
import '../Style/Shoplist.css'
import SLModal from './SLModal';

function ShoplistCard({list, setRunEffect}) {

    const [modal, setModal] = useState(true)

    let dollarUS = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });
    
    
    console.log('list', list)

    const mappeditems = list.shopping_list_items?.map(li => {
        return <ul> <li><p>{li.showitem.name}</p>  <p>Price: {dollarUS.format(li.showitem.price)}</p> <p>Quantity: {li.showitem.quantity}</p> <p>Store: {li.showitem.store}</p></li> </ul>
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
    <div className={modal? 'shop-list' : 'shop-list-modal show-modal'}>
        {modal? 
        <>
        <p>
            Name: {list.name ? list.name : 'Enter A Name...'} -  Total Cost: {dollarUS.format(list.total_amount)}
        </p>
        <button className = 'deleteButton' onClick={() => setModal(false)}>Show details</button>
    <button className="deleteButton" onClick={removeList}>Delete</button><br/>
        </>
    :
     <SLModal list={list} setModal={setModal}/>
     }
        
</div>
      )

    }
    
    export default ShoplistCard
    //   <div className='shop-list'>
    //       <details>
    //           <summary>
    //               Name: {list.name ? list.name : 'Enter A Name...'} -  Total Cost: {dollarUS.format(list.total_amount)}
    //           </summary> 
    //             {mappeditems}
    //       </details>
    //       <button className="deleteButton" onClick={removeList}>Delete</button><br/>
    //   </div>