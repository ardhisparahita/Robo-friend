import React, {useState} from 'react'
import CardList from '../Components/CardList'
import { listRobots } from '../utils/robots';
import SearchBox from '../Components/SearchBox';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';

const Home = () => {
  const{token} = useParams()
  const[data, setData] = useState()

  const getData = async () => {
    const {data} = await axios("https://fadfaasd.herokuapp.com/api/v1/profile", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    setData(data)
  }

  useEffect(() => {
    getData()
    // eslint-disable-next-line
  }, [])

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
      <h1>Selamat datang, {data?.data.email}</h1>  
      <h1>Robofriend</h1>
      <SearchBox searchChange={onSearchChange}/>
      <CardList robots={filteredRobots}/>
    </div>
  )
}

export default Home