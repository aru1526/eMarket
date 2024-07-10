import React, { useContext } from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import Item from '../Item/Item'

const ItemDisplay = ({category}) => {
    const {food_list} =useContext(StoreContext)
  return (
    <div className='item-diaplay' id='item-display'>
        <h2>BestSeller at your door step</h2>
        <div className='item-display-list'>
            {food_list.map((item,index)=>{
                return <Item key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                
            })}
        </div>
      
    </div>
  )
}

export default ItemDisplay
