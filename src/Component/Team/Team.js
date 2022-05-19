import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Team.css'
import Dashboard from '../Dashboard/Dashboard';

function Team() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/persons?_quantity=6')
    .then( response => setTeams(response.data.data) )
  }, [])
  console.log(teams)
  return (
    <div className='main'>

      <div className='dashboard'>
        <Dashboard />
      </div>
      <div className='table'>
      <div className='title'>
          <h1>Team Members</h1>
        </div>
        <table>
          <thead>
            <tr>
              <td>Full name</td>
              <td>Email</td>
              <td>Phone number</td>
              <td>Gender</td>
              <td>Image</td>
            </tr>
          </thead>
          <tbody>
          {
              teams ? teams.map((team, idx) => (
                <tr className='team-row'>
                  <td>
                    <h3>{team.firstname}  {team.lastname}</h3>
                  </td>
                  <td><p>{team.email}</p></td>
                  <td><p>{team.phone}</p></td>
                  <td><p>{team.gender}</p></td>
                  <td>
                    <div className='team-image'>
                      <img src={team.image} alt='' />
                    </div>
                  </td>
                </tr>
              )) : null
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Team