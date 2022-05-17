import React from 'react'
import './Dashboard.css'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div className='dashboard'>
       <div className='dashArrange'>
         <div><Link to='/Home/Client'>Client</Link></div>
         <div><Link to='/Home/Team'>Team</Link></div>
         <div><Link to='/Home/Product'>Product</Link></div>
         <div><Link to='/'>Logout</Link></div>
       </div>
    </div>
  )
}

export default Dashboard