import React from 'react'
import { FaPlus  } from 'react-icons/fa';
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addForm'>ADD ITEM</label>
        <input
        autoFocus
        id='addItem'
        type='text'
        placeholder='ADD ITEM...'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' aria-label='ADD ITEM'>
            <FaPlus/>
            
        </button>

    </form>
  )
}

export default AddItem