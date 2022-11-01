import React from 'react'

const SearchBox = (props) => {
  // eslint-disable-next-line
  const {searchfield, searchChange } = props
  return (
    <div className='pa2'>
      <input className='pa3 ba b--light-green bg-light-green'
      type='search' 
      placeholder='Search Robots'
      onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox