import React, { useState } from 'react'
import CardList from './Components/CardList'
import { listRobots } from './utils/robots';
import SearchBox from './Components/SearchBox';

const App = () => {
  // eslint-disable-next-line
  const [robots, setRobots] = useState(listRobots)
  const [searchField, setSearchField] = useState("")

  function onSearchChange(event) {
    setSearchField(event.target.value)
    
  }
  const filteredRobots = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    
    <div className='tc'>
      <h1>Robofriend</h1>
      <SearchBox searchChange={onSearchChange}/>
      <CardList robots={filteredRobots}/>
    </div>
  )
}

export default App