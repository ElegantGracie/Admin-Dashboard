import React from 'react'
import './Dashboard.css'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div className='dashboard'>
       <div className='dashArrange'>
<<<<<<< HEAD
         <div className='link'>
           <h4 style={{color: 'grey'}}>Dashboard</h4>
         </div>
         <div className='link'><Link to='/Home/Client' className='text-link'>Client</Link></div>
         <div className='link'><Link to='/Home/Team' className='text-link'>Team</Link></div>
         <div className='link'><Link to='/Home/Product' className='text-link'>Product</Link></div>
=======
         <div className='link'><h4 style={{color: '#fff'}}>Dashboard</h4></div>
         <div className='link'><Link to='Client' className='text-link'>Client</Link></div>
         <div className='link'><Link to='/Team' className='text-link'>Team</Link></div>
         <div className='link'><Link to='/Product' className='text-link'>Product</Link></div>
>>>>>>> d7220d44cd1492d2784dc74bbcd777dcac86e1d3
         <div className='logout'><Link to='/' className='text-link'>Logout</Link></div>
       </div>
    </div>
  )
}

export default Dashboard