import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'

const App = () => {
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
          path='/:token'
          element={
            <Home/>
          }
        />
    </Routes>
    </BrowserRouter>
    
    
    </>
  )
}

export default App