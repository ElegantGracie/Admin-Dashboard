import React from 'react';
import './Home.css';
import Dashboard from '../../Component/Dashboard/Dashboard';
import HomePage from '../../Component/HomePage/HomePage';

function Home() {

  return (
    
    <div className='home'>
      
        <div className='dashboard'>
          <Dashboard/>
        </div>
        <div className='homepage'>
          <HomePage />
        </div>

    </div>
  )
}

export default Home