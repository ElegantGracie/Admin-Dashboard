import React from 'react'
import './Team.css'

function Team() {
  return (
    <div className='table'>
        <table>
          <thead>
            <tr>
              <td>Full name</td>
              <td>Email</td>
              <td>Phone number</td>
              <td>Gender</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Emmanuel Focus</td>
              <td>emmanuelexf3@gmail.com</td>
              <td>0809 694 0314</td>
              <td>Male</td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default Team