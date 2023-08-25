import React from 'react'
import { FaTrashAlt  } from 'react-icons/fa';

const LineItem = ({p,handleChange,handleDelete}) => {
  return (
    <li class="item" key={p.id}>
          <input
          type='checkbox'
          onChange={()=>handleChange(p.id)}
          checked = {p.checked}

          />
          <label style={(p.checked ? {textDecoration:"line-through"}:null)} onDoubleClick={()=>handleChange(p.id)}>{p.item}</label>
          <FaTrashAlt
          role='button'
          onClick={()=>handleDelete(p.id)}
          tabIndex="0"
          aria-label={`Delete ${p.item}`}
          />

        </li>

  )
}

export default LineItem