import React, {useEffect, useState} from 'react'
import './Client.css'
import Dashboard from '../Dashboard/Dashboard'
import axios from 'axios'

function Client() {

  const [clients, setClients] = useState([])

  useEffect(() => {
    axios.get('https://fakerapi.it/api/v1/companies?_quantity=15')
    .then( response => setClients(response.data.data) )
  }, [])
  console.log(clients)

  return (
    <div className='main'>

      <div className='dashboard'>
        <Dashboard />
      </div>

      <div className='table'>
        <div className='title'>
          <h1>Clients</h1>
        </div>
        <table>
          <thead>
            <tr>
              <td>Customer</td>
              <td>Email</td>
              <td>Phone number</td>
              <td>VAT</td>
              <td>Image</td>
            </tr>
          </thead>
          <tbody>
          {
              clients ? clients.map((client, idx) => (
                <tr className='client-row'>
                  <td>
                    <h3>{client.name}</h3>
                  </td>
                  <td><p>{client.email}</p></td>
                  <td><p>{client.phone}</p></td>
                  <td><p>{client.vat}</p></td>
                  <td>
                    <div className='client-image'>
                      <img src={client.image} alt='' />
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

export default Client