import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <Login/>
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