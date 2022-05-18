import React from 'react'
import './Home.css'
import Dashboard from '../../Dashboard/Dashboard';
import HomePage from '../../Component/HomePage/HomePage';
import {Routes, Route} from "react-router-dom";
import Client from '../../Component/Client/Client';
import Team from '../../Component/Team/Team';
import Product from '../../Component/Product/Product';


function Home() {
  return (
    
    <div className='home'>

      <div className='dashboard'>
      <Dashboard/>
      </div>

      <div className='homepage'>
      <HomePage/> 
      </div>
        
      <Routes>
          <Route path='/Team' element={<Team/>}/>
          <Route path='/Client' element={<Client/>}/>
          <Route path='/Home/Product' element={<Product/>}/>        
        </Routes>

    </div>
  )
}

export default Home