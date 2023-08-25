import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=> e.preventDefault()}>
        <label htmlFor='search'>SEARCH</label>
        <input
        id='search'
        type='text'
        role='search box'
        placeholder='SEARCH ITEMS'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />

    </form>
  )
}

export default SearchItem