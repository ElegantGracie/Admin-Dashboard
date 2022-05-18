import React from 'react'
import './Home.css'
import Dashboard from '../../Dashboard/Dashboard';
import Client from '../../Component/Client/Client';
import Team from '../../Component/Team/Team';
import Product from '../../Component/Product/Product';
import HomePage from '../../Component/HomePage/HomePage';
import {Routes, Route} from "react-router-dom";
// import Chart from '../../Component/Charts/Chart';


function Home() {
  return (
    
    <div className='home'>
      <div className='dashboard'>
      <Dashboard/>
      </div>

      <div className='homepage'>
      <HomePage/> 
      </div>
      {/* <div>
        <Chart />
      </div> */}
      
       




        
        <Routes>
          <Route path='/Home/Team' element={<Team/>}/>
          <Route path='/Home/Client' element={<Client/>}/>
          <Route path='/Home/Product' element={<Product/>}/>        
        </Routes>

        
    </div>
  )
}

export default Home