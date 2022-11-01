import React, { useState } from 'react'
import CardList from './Components/CardList'
import { listRobots } from './utils/robots';
import SearchBox from './Components/SearchBox';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

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
    <>
    <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <div className="App">
            <a href='https://fadfaasd.herokuapp.com/api/v1/auth/google'>Login Google Ardhis Parahita</a>
          </div>
        }/>
        <Route
          path='/home'
          element={
            <div className='tc'>
            <h1>Robofriend</h1>
            <SearchBox searchChange={onSearchChange}/>
            <CardList robots={filteredRobots}/>
            </div>
          }
        />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App