import React from 'react'
import {Link} from "react-router-dom"

function Dashboard() {
  return (
    <div className='dashboard'>
       <div>
         <p><Link to='/client'>Client</Link></p>
         <p><Link to='/team'>Team</Link></p>
         <p><Link to='/product'>Product</Link></p>
         <p><Link to='/Login'>Logout</Link></p>
       </div>
    </div>
  )
}

export default Dashboard