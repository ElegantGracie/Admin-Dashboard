import React from 'react'
import './HomePage.css'
import LineChart from '../Charts/LineChart'
import BarCharts from '../Charts/BarCharts';
import iPhone13 from '../Images/iPhone-13-1.webp';
import iPhone12 from '../Images/iPhone-12.webp';
import iPhone11 from '../Images/iPhone-11.webp';
import PhantomX from '../Images/PHANTOM-X.webp';
import Camon17 from '../Images/TECNO-CAMON-17.jpg';
import Hot11 from '../Images/Infinix-HOT-11-PLAY.webp';
import Note11 from '../Images/Infinix-NOTE-11S-1.webp';
import ZeroX from '../Images/Infinix-ZERO-X-Pro-0.webp';

function HomePage() {

  const Phones = [
    {id: 1, phonename: 'iPhone 13', image: iPhone13, price: '₦1,200,000' },
    {id: 2, phonename: 'iPhone 12', image: iPhone12, price: '₦450,000' },
    {id: 3, phonename: 'iPhone 11', image: iPhone11, price: '₦320,000' },
    {id: 4, phonename: 'Tecno Phantom-X', image: PhantomX, price: '₦228,000' },
    {id: 5, phonename: 'Infinix Note 11', image: Note11, price: '₦109,000' },
    {id: 6, phonename: 'Tecno Camon 17', image: Camon17, price: '₦97,000' },
    {id: 7, phonename: 'Infinix Hot 11', image: Hot11, price: '₦89,000' },
    {id: 8, phonename: 'Infinix Zero-X', image: ZeroX, price: '₦84,000' },
  ]

  const Sales = [
    {id:'19-05-2022', sName:'Tecno Phantom X', price:'₦228,000'},
    {id:'19-05-2022', sName:'Infinix Note 11', price:'₦109,000'},
    {id:'19-05-2022', sName:'iPhone 11', price: '₦320,000'},
    {id:'18-05-2022', sName:'iPhone 12', price: '₦450,000'},
  ]

  return (
    <div className='homepage'>
      <div className='left'>
        <div className='dash'>
          <h1>Dashboard</h1>
        </div>
        <div className='stats'>
            <div className='box'>
              <p>Total Profit</p>
              <h2>₦1,310,635 <span>+3.01%</span></h2>
            </div>
            <div className='box'>
              <p>Total Expenses</p>
              <h2>₦521,970 <span>+4.3%</span> </h2>
            </div>
            <div className='box'>
              <p>New Customers</p>
              <h2>20 <span className='red'>-2.5%</span> </h2>
            </div>
        </div>
        <div className='graph'>
          <h2>Average Sales</h2>
          <LineChart />
        </div>
        <div className='sales'>
          <h2>Last Transactions</h2>
          <table>
            {
              Sales && Sales.map((Sale) =>
              <tr>
                <td><p>{Sale.id}</p></td>
                <td><h4>{Sale.sName}</h4></td>
                <td><p>{Sale.price}</p></td>
              </tr>)
            }
          </table>
        </div>
      </div>
      <div className='right'>
        <div className='right-head'>
          <h2>top products</h2>
        </div>
        <div className='sales'>
        <table>
            {
              Phones && Phones.map((Phone) =>
              <tr className='row'>
                <td className='image'><img src={Phone.image} alt='' /></td>
                <td className='name'><h3>{Phone.phonename}</h3></td>
                <td><h4>{Phone.price}</h4></td>
              </tr>
              )
            }
        </table>
        </div>
        <div className='visits'>
          <BarCharts />
        </div>
      </div>   
    </div>
  )
}

export default HomePage