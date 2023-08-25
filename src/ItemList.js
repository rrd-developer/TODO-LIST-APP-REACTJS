import React from 'react'

import LineItem from './LineItem';

const ItemList = ({items,handleChange,handleDelete}) => {
  return (
    <ul>
      {items.map((p) =>(
        <LineItem 
        p = {p}
        key={p.id}
      handleChange = {handleChange}
      handleDelete = {handleDelete}
        />
      ))}
      </ul>
  )
}

export default ItemList